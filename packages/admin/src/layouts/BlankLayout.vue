<template>
    <Suspense>
        <template #default>
            <router-view />
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
</template>
