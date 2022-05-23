// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./ContentMixin.sol";
import "./NativeMetaTransaction.sol";

contract NFT is ContextMixin, ERC721A, NativeMetaTransaction, Ownable {
    using SafeMath for uint256;

    uint256 MAX_SUPPLY = 8888;
    uint256 MAX_WHITE_SUPPLY = 2000;

    bool isMetaDataFrozen = false;

    function freezeMetaData() public onlyOwner {
        isMetaDataFrozen = true;
    }

    string public _contractURI;

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    function setContractUri(string memory uri) public onlyOwner {
        _contractURI = uri;
    }

    string public ghostTokenURI =
        "ipfs://QmdBEyR42vGJ1Bms48dzTghFBDPouD5C2md73L2XH5hgHF/ghost.json";

    function setGhostUri(string memory _uri)
        external
        onlyOwner
        notFrozenMetaData
    {
        ghostTokenURI = _uri;
    }

    string public baseTokenURI =
        "ipfs://QmUzkbUWpuYAXKzBYJoCRY8AFNvUume53ND1Cs1GbXrqrs/";

    function setBaseUri(string memory _uri)
        external
        onlyOwner
        notFrozenMetaData
    {
        baseTokenURI = _uri;
    }

    uint256 public NFT_price_for_wl = 0.0005 ether;

    uint256 public NFT_price_for_1 = 0.0008 ether;
    uint256 public NFT_price_for_3 = 0.0018 ether;
    uint256 public NFT_price_for_9 = 0.0045 ether;
    uint256 public NFT_price_for_18 = 0.0072 ether;

    string _name = "Non-Fungible Token";
    string _symbol = "NFT";

    bool public isPublicSaleActive = false;

    function setIsPublicSaleActive(bool _isPublicSaleActive)
        external
        onlyOwner
    {
        isPublicSaleActive = _isPublicSaleActive;
    }

    bool public isWhiteListActive = false;

    function setIsWhiteListActive(bool _isWhiteListActive) external onlyOwner {
        isWhiteListActive = _isWhiteListActive;
    }

    bool public isRevealActive = false;

    function setIsRevealActive(bool _isRevealActive) external onlyOwner {
        isRevealActive = _isRevealActive;
    }

    bool public isBurnActive = false;

    function setIsBurnActive(bool _isBurnActive) external onlyOwner {
        isBurnActive = _isBurnActive;
    }

    mapping(address => uint8) private _whiteList;

    function setWhiteList(address[] calldata addresses, uint8 numAllowedToMint)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < addresses.length; i++) {
            _whiteList[addresses[i]] = numAllowedToMint;
        }
    }

    modifier notFrozenMetaData() {
        require(!isMetaDataFrozen, "The metadata is already frozen");
        _;
    }

    // uint256 public startTime = 1644361200;
    // function setStartTime(uint256 time) external onlyOwner {
    //     startTime = time;
    // }
    modifier mintHasStarted() {
        // require(block.timestamp >= startTime, "It's not time yet");
        require(isPublicSaleActive, "It's not time yet");
        _;
    }

    // constructor(string memory _baseTokenURI, string memory _ghostTokenURI) ERC721A(_name, _symbol, 20) {
    constructor() ERC721A(_name, _symbol) {
        // baseTokenURI = _baseTokenURI;
        // ghostTokenURI = _ghostTokenURI;
        _initializeEIP712(_name);
    }

    function numAvailableToMint(address addr) external view returns (uint8) {
        return _whiteList[addr];
    }

    function mintWhiteList(uint8 numberOfTokens) external payable {
        uint256 ts = totalSupply();
        require(isWhiteListActive, "Allow list is not active");
        require(
            numberOfTokens <= _whiteList[msg.sender],
            "Exceeded max available to purchase"
        );
        require(
            ts + numberOfTokens <= MAX_WHITE_SUPPLY,
            "Purchase would exceed whitelist max tokens"
        );
        require(
            NFT_price_for_wl * numberOfTokens == msg.value,
            "Ether value sent is not correct"
        );

        _whiteList[msg.sender] -= numberOfTokens;
        buyAmount(numberOfTokens);
        // _safeMint(_msgSender(), numberOfTokens);
        // uint256 fee = (msg.value * 2) / 10;
        // payable(owner()).transfer(fee);
    }

    function buyOne() external payable mintHasStarted {
        require(msg.value == NFT_price_for_1, "Wrong amount for 1");
        buyAmount(1);
    }

    function buyThree() public payable mintHasStarted {
        require(msg.value == NFT_price_for_3, "Wrong amount for 3");
        buyAmount(3);
    }

    function buyNine() public payable mintHasStarted {
        require(msg.value == NFT_price_for_9, "Wrong amount for 9");
        buyAmount(9);
    }

    function buyEighteen() public payable mintHasStarted {
        require(msg.value == NFT_price_for_18, "Wrong amount for 18");
        buyAmount(18);
    }

    function buyAmount(uint256 count) internal {
        require(
            // totalSupply() + count < MAX_PUBLIC_SUPPLY,
            totalSupply() + count < MAX_SUPPLY,
            "Max Public Supply Reached"
        );
        _safeMint(_msgSender(), count);
        uint256 fee = (msg.value * 2) / 10;
        payable(owner()).transfer(fee);
    }

    /**
     * @dev Burns `tokenId`. See {ERC721A-_burn}.
     *
     * Requirements:
     *
     * - The caller must own `tokenId` or be an approved operator.
     */
    function burn(uint256 tokenId) public {
        require(isBurnActive, "Allow burn is not active");
        uint256 refund = address(this).balance / totalSupply();
        uint256 fee = (refund * 2) / 10;
        _burn(tokenId, true);
        payable(owner()).transfer(fee);
        payable(msg.sender).transfer(refund - fee);
    }

    // function mintMany(uint256 num, address _to) public onlyOwner {
    //     require(num <= 20, "Max 20 Per TX.");
    //     require(totalSupply() + num < MAX_SUPPLY, "Max Supply Reached");
    //     _safeMint(_to, num);
    // }

    // function mintTo(address _to) public onlyOwner {
    //     require(totalSupply() < MAX_SUPPLY, "Max Supply Reached");
    //     _safeMint(_to, 1);
    // }

    // function withdraw() external onlyOwner {
    //     payable(owner()).transfer(address(this).balance);
    // }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        if (isRevealActive) {
            return
                string(
                    abi.encodePacked(
                        baseTokenURI,
                        Strings.toString(_tokenId),
                        ".json"
                    )
                );
        }
        return string(abi.encodePacked(ghostTokenURI));
    }

    /**
     * This is used instead of msg.sender as transactions won't be sent by the original token owner, but by OpenSea.
     */
    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }
}
