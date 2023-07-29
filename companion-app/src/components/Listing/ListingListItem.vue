<template>
    <article class="media mb-5">
        <figure class="media-left">
            <p class="image is-128x128 is-hidden-mobile">
                <img :src="listing.image"/>
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>
                        {{ listing.title }}
                    </strong>
                    <small class="pl-1">
                        {{ listing.address }}
                    </small>
                    <br>
                    {{ listing.description }}
                    <br>
                    <small class="has-text-weight-bold">
                        <span>{{ listing.price/100 }}/day</span>
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <button class="button is-light is-small"
            @click="removeListing(listing)"
            >
                Remove
            </button>
        </div>
    </article>
</template>
<script>
    import { useMutation } from '@vue/apollo-composable';
    import { DeleteListingMutation } from '../../gql/mutations'    

    export default {
        name: 'ListingListItem',
        props: ['listing', 'refetchListings'],
        setup(props) {
            const { mutate: deleteListing, onDone } = useMutation(DeleteListingMutation);

            const removeListing = () => {
                return deleteListing({ id: props.listing.id })
            }

            onDone(() => {
                props.refetchListings();
            })

            return {
                removeListing
            }
        }
    }
</script>