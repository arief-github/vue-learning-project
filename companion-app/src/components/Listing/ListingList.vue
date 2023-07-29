<template>
    <div id="listings">
        <div v-for="listing in listings" :key="listing.id">
            <ListingListItem :listing="listing" :refetchListings="refetchListings" />
        </div>
    </div>
</template>
<script>
    import ListingListItem from './ListingListItem.vue';

    export default {
        name: 'ListingList',
        props: ['listings', 'refetchListings'],
        components: {
            ListingListItem
        }
    }
</script>