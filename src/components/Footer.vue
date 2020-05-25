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
            <div class="footer__about">
                <p>Search and compare restaurants, make online reservations, and read restaurant reviews from real diners on KAYAK.</p>
            </div>
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
    padding: 4em 0;

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

}

</style>