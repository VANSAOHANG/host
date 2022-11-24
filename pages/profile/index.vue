<template>
    <section class="profile-container row">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="profile">
                        <b-card title="Virak Oudom"
                            img-src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
                            img-alt="Image" img-top tag="article" class="text-center border-0 shadow-sm p-3">
                            <b-card-text class="mb-4 pb-2">
                                UX/UI Designer
                            </b-card-text>
                            <ButtonMain :link="{ name: 'about' }" title="Change Password"></ButtonMain>
                        </b-card>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="information">
                        <b-card title="Information" tag="article" class="border-0 shadow-sm mb-4">
                            <div v-for="info, i in informations" :key="i"
                                class="info-control border rounded py-2 px-3 mb-3">
                                <span class="info text-capitalize">{{ info.info }}</span>
                                <p class="title font-weight-bold mb-0">{{ info.title }}</p>
                            </div>
                        </b-card>
                        <div class="ot-contro">
                            <div class="row">
                                <div class="col-sm-6">
                                    <b-card tag="article" class="border-0 shadow-sm mb-4">
                                        <b-card-title>
                                            <b-icon-clock-history></b-icon-clock-history>
                                            OT Hours
                                        </b-card-title>
                                        <b-card-text>
                                            $ {{ otHours }}/Hrs
                                        </b-card-text>
                                    </b-card>
                                </div>
                                <div class="col-sm-6">
                                    <b-card tag="article" class="border-0 shadow-lg">
                                        <b-card-title>
                                            <b-icon-currency-dollar></b-icon-currency-dollar>
                                            OT Amount
                                        </b-card-title>
                                        <b-card-text>
                                            $ {{ otAmount }}
                                        </b-card-text>
                                    </b-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import ButtonMain from '../../components/ButtonMain.vue'
export default {
    components: { ButtonMain },
    data() {
        return {
            informations: [
                { info: 'password', title: 'dom123456' },
                { info: 'phone number', title: '855 86 55 70 43' },
                { info: 'email', title: 'Virakoudom@camsolution.biz' },
            ],
            otHours: '2.50',
            otAmount: '500.00'
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~assets/sass/pages/_profile.scss";
</style>