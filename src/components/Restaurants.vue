import Restaurants from '@/components/Restaurants.vue';
<template>
  <div class="restaurants">
    <!-- search component -->
    <div class="restaurants__search">
        <div class="restaurants__grid">
            <div class="restaurants__address">
                <input type="text" placeholder="address">
            </div>
            <div class="restaurants__grid-middle">
                <div class="restaurants__date">
                    <input type="date" name="dateofbirth" id="dateofbirth">
                </div>
                <div class="restaurants__guests">
                    <input type="text" placeholder="guests">
                </div>
                <div class="restaurants__time">
                    <input type="text" placeholder="time">
                </div>
            </div>
            </div>
        <div class="restaurants__search">
            <button class="restaurants__button">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>

    <!-- recommendations -->
    <div class="restaurants__reccomendations">
        <div class="restaurants__rec-title">
            <h3 class="restaurants__rec-title--left">Rwandan Favorites in Kigali</h3>
            <h3 class="restaurants__rec-title--right">
                <a class="restaurants__rec-link" href="#">See all</a>
            </h3>
        </div>
        <div class="restaurants__rec-image">
        </div>
        <div class="restaurants__rec-name">
            <h2 class="restaurants__rec-name--margin">Butamu - Kigali</h2>
            <h2 class="restaurants__rec-name--margin">Rating</h2>
            <h2 class="restaurants__rec-name--margin">Cost $$</h2>
        </div>
    </div>

    <!-- locations dropdown -->
    <!-- <div class="aselect" :data-value="value" :data-list="list">
	    <div class="selector" @click="toggle()">
	        <div class="label">
				    <span>{{ value }}</span>
	        </div>
			<div class="arrow" :class="{ expanded : visible }"></div>
	        <div :class="{ hidden : !visible, visible }">
	            <ul>
	                <li :class="{ current : item === value }" v-for="item in list" :key="item.id" @click="select(item)">{{ item }}</li>
	            </ul>
	        </div>
	    </div>
	</div> -->

  </div>
</template>

<script>
export default {
    name: 'Restaurants',
    data() {
        return {
            value: 'Kigali',
            list: ["Orange","Apple","Kiwi", "Lemon", "Pineapple"],
            visible: false
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        select(option) {
            this.value = option;
        }
    }
}
</script>

<style lang="scss">
    .restaurants {
        width: 300px;
        margin: 10px auto;
        
        @media (min-width: 570px) {
           width: 70%;
        }

        &__grid {
            display: flex;
            flex-direction: column;
        }
        
        @media (min-width: 570px) {

            &__grid-middle {
                display: flex;
                justify-content: space-between;
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
        }

        &__button {
            width: 100%;
            padding: 12px 20px;
            height: 46px;
            margin-top: 10px;
            background-color: #0081E0;
            border: 0;
            color: #fff;
            border-radius: 8px;
        }
        
        // reccomendations
        &__reccomendations {
            margin: 50px 0px 0px 0px;
        }

        &__rec-title {
            margin: 0px 0px 15px 0px;
            display: flex;

            &--left {
                width: 70%;
            }
            &--right {
                width: 30%;
                text-align: right;
            }
        }

        &__rec-link {
            text-decoration: none;
            color: #0081E0;
        }


        &__rec-image {
            background-image: url("https://images.unsplash.com/photo-1514548383638-cef9251a73ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
            height: 180px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8px;
        }

        &__rec-name {
            margin: 15px 0px 0px 0px;

            &--margin {
                margin: 0px 0px 5px 0px;
            }
        }

        // dropdown 
        .aselect {
            margin: 20px auto;

            .selector {
                border-bottom: 1px solid gainsboro;
                // background: #F8F8F8;
                position: relative;
                z-index: 1;
                .arrow {
                    position: absolute;
                    right: 10px;
                    top: 40%;
                    width: 0;
                    height: 0;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    border-top: 10px solid #888;
                    transform: rotateZ(0deg) translateY(0px);
                    transition-duration: 0.3s;
                    transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
                }
                .expanded {
                    transform: rotateZ(180deg) translateY(2px);
                }
                .label {
                    display: block;
                    padding: 12px 0px;
                    font-size: 16px;
                    color: #000;
                }
            }

            ul {
                width: 100%;
                list-style-type: none;
                padding: 0;
                margin: 0;
                font-size: 16px;
                // border: 1px solid gainsboro;
                position: absolute;
                z-index: 1;
                background: #fff;
            }

            li {
                padding: 12px 0px;
                color: #666;
                &:hover {
                    color: white;
                    background: seagreen;
                }
            }

            .current {
                background: #eaeaea;
            }

            .hidden {
                visibility: hidden;
            }

            .visible {
                visibility: visible;
            }
        }
    }
</style>