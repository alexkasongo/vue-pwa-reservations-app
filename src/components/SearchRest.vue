<template>
    <div class="searchrest">
        <div class="searchrest__search">
            <div class="searchrest__grid">
                <div class="searchrest__address">
                    <input type="text" placeholder="location">
                </div>
                <div class="searchrest__grid-middle">
                    <div class="searchrest__date">
                        <input type="date" name="dateofreservation" id="dateofreservation">
                    </div>
                    <div class="searchrest__guests">
                        <input type="text" placeholder="2 guests">
                    </div>
                    <div class="searchrest__time">
                        <input type="text" placeholder="7:00pm">
                    </div>
                </div>
                </div>
            <!-- <div class="searchrest__search">
                <router-link to="/deep-search">
                    <button class="searchrest__button">
                        <i class="fas fa-search"></i>
                    </button>
                </router-link>
            </div> -->
            <div class="searchrest__search">
                <div class="searchrest__searchbox-times">
                    <p>2pm</p>
                    <p>2pm</p>
                    <p>2pm</p>
                    <p>2pm</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchRest",
    props: [''],
    data: function () {
        return {
            
        }
    },
    mounted() {
    },
    computed: {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.searchrest {

    margin: auto;

    &__search {
        
        @media (min-width: 1024px) {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            flex-direction: column;
            width: 100%;

            a {
                width: 100%;
            }
        }
    }

    &__grid {
        display: flex;
        flex-direction: column;

        @media (min-width: 1024px) {
            flex-direction: column;
            width: 100%;
            
        }
    }

    &__address {
        @media (min-width: 1024px) {
            width: 100%;
            // margin-right: 5px;
        }
    }

    &__grid-middle {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        @media (min-width: 570px) {
           flex-wrap: nowrap;
        }

        @media (min-width: 1024px) {
            // margin-right: 5px;
        }
    }

    &__date {
        width: 100%;
        margin: 0px 5px 0px 0px;
    }

    &__guests {
        width: 100%;
        margin: 0px 5px 0px 0px;
    }

    &__time {   
        width: 100%;
    }

    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin-top: 5px;
        height: 46px;
        background-color: #EEEEEE;
        border: 0;
        border-radius: 8px;
    }

    input[type=date] {
        width: 100%;
        padding: 12px 20px;
        margin-top: 5px;
        height: 46px;
        background-color: #EEEEEE;
        border: 0;
        border-radius: 8px;
        color: #000;
    }

    ::placeholder {
        color: #212a30;
    }

    &__button {
        width: 100%;
        padding: 12px 20px;
        height: 46px;
        margin-top: 10px;
        background-color: #339DBE;
        border: 0;
        border-radius: 8px;
        color: #fff;

        @media (min-width: 1024px) {
            margin-top: 5px;
        }
    }

    &__searchbox-times {
        margin: 10px 0 0 0;
        display: flex;

        p {
            margin: 0 10px 0 0;
            background-color: orange;
            padding: 15px;
            width: 90px;
            text-align: center;
            border-radius: 8px;
            font-weight: 500;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
        }
    }

}


</style>