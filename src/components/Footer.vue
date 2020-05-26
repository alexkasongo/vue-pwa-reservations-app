<template>
    <div class="footer">
        <div class="footer__list">
            <div class="footer__list-one">
                <ul class="footer__link">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Mobile</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">How we work</a></li>
                </ul>
            </div>
            <div class="footer__list-two">
                <ul class="footer__link">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Mobile</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Partners</a></li>
                </ul>
            </div>
            <div class="footer__list-three">
                <ul class="footer__link">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Mobile</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Certificates</a></li>
                </ul>
            </div>
        </div>

        <div class="footer__terms">
            <ul>
                <li><a href="#">Do not sell my info</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">©2020 Name</a></li>
            </ul>
        </div>
        <div class="footer__about">
            <p>Search and compare restaurants, make online reservations, and read restaurant reviews from real diners on NAME.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">

.footer {
    background-color: #212A30;
    padding: 4em 0 2em 0;

    &__list {
        display: flex;
        justify-content: space-between;
        margin: 0 2em;
    }

    &__link {
        li {
            margin-bottom: 10px;

            a {
                text-decoration: none;
                color: #fff;
                font-weight: 300;
                font-size: 12px;
            }
        }
    }

    &__terms {
        margin-top: 30px;
        
        ul {
            display: flex;
            width: 200px;
            flex-wrap: wrap;
            justify-content: center;
            margin: auto;

            @media (min-width: 570px) {
               width: unset;
            }

            li {
            margin-bottom: 5px;
            margin-right: 10px;

                a {
                    text-decoration: none;
                    color: #fff;
                    font-weight: 300;
                    font-size: 12px;
                }
            }
        }
    }

    &__about {
        text-align: center;
        font-size: 11px;
        width: 250px;
        margin: 15px auto 0px auto;
        line-height: 1.5;
        color: #fff;
        font-weight: 300;

        @media (min-width: 570px) {
            width: unset;
        }
    }

}

</style>