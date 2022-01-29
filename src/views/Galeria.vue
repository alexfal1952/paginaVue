<template>
  <div>
    <div class="pt-5 pb-5">
      <div v-if="mostrarDetalle" class="centrar">
        <b-card no-body class="overflow-hidden col-11">
          <b-row no-gutters>
            <b-col md="6" class="centrar">
              <!--  -->
              <div class="col-8" data-mdb-auto-height="true">
                <div class="row py-3 shadow-5">
                  <div class="col-12 mb-1">
                  <div class="lightbox">
                      <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                      alt="Gallery image 1"
                      class="ecommerce-gallery-main-img active w-100"
                      />
                  </div>
                  </div>
                  <div class="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                        alt="Gallery image 1"
                        class="active w-100"
                    />
                  </div>
                  <div class="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        alt="Gallery image 2"
                        class="w-100"
                    />
                  </div>
                  <div class="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                        alt="Gallery image 3"
                        class="w-100"
                    />
                  </div>
                  <div class="col-3 mt-1">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                        alt="Gallery image 4"
                        class="w-100"
                    />
                  </div>
                </div>
              </div>
              <!-- <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img> -->
            </b-col>
            <b-col md="6">
              <div class="pt-3 col-12" style="text-align:left" >
                <b-button @click="regresar"><i class="fas fa-arrow-left"></i>Regresar</b-button>
              </div>
              <b-card-body title="Polerón Keller Zip-Up Dark Grey Heather Quiksilver ">

                <b-card-text>
                  <b-tabs content-class="mt-3" fill>
                    <b-tab title="DETALLES" active>
                      <ul style="text-align: left">
                        <li>Tejido: Tejido de poliéster grueso de rizo.</li>
                        <li>Corte: corte normal, clásico, cómodo.</li>
                        <li>Tejido interior: forro polar ligero en la capucha.</li>
                        <li>Detalle interno de tejido polar ligero.</li>
                        <li>Bolsillos: bolsillos laterales.</li>
                        <li>Punto canalé en los puños.</li>
                        <li>Ribete en puños, dobladillo y bolsillos.</li>
                        <li>Cordón de ajuste de algodón en la capucha.</li>
                        <li>100% Poliéster.</li>
                      </ul>
                    </b-tab>
                    <b-tab title="COMPRA">
                      <b-overlay
                        :show="show"
                        spinner-variant="primary"
                        spinner-type="grow"
                        spinner-small
                        rounded="sm"
                      >
                        <div>
                          <b-form-group label="Talla" v-slot="{ ariaDescribedby }">
                            <b-form-radio-group
                              id="btn-radios-1"
                              v-model="selected"
                              :options="options"
                              :aria-describedby="ariaDescribedby"
                              name="radios-btn-default"
                              buttons>
                            </b-form-radio-group>
                          </b-form-group>
                            <div style="display: inline-table;" class="pt-3">
                              <label for="demo-sb">Cantidad</label>
                              <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100" style="width:130px">
                              </b-form-spinbutton>
                            </div>
                            <div class="pt-3">
                              <b-button block variant="primary" @click="comprar">
                                <i class="fas fa-shopping-cart"></i> 
                                Agregar
                              </b-button>
                            </div>
                            <div class="pt-3">
                              <b-alert
                              class=""
                                :show="dismissCountDown"
                                variant="success"
                                @dismissed="dismissCountDown=0"
                              >
                                Se agrego...
                              </b-alert>
                            </div>
                        </div>
                      </b-overlay>
                    </b-tab>
                  </b-tabs>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <div v-else>
        <b-tabs content-class="mt-3" align="center">
          <b-tab title="Ofertas" active>
            <!--  -->
            <div >
              <b-card-group >
                <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1eUbl4ccXiCC6IPZzeYiNBdCdat6bq5CD" img-alt="Image" class=" m-1">
                  <b-card-text>
                    Dark Grey Heather Quiks
                  </b-card-text>
                  <template #footer>
                    <button class="btn" @click="mostrarDetalle=true">
                      <small class="text-muted">
                        Ver mas
                      </small>
                    </button>
                  </template>
                </b-card>

                <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1GQkXiv4aGbASaQlrNSk3_qbHNMhqFEx6" img-alt="Image" img-top class=" m-1">
                  <b-card-text>
                    Polerón Jungle Forest Indian Teal
                  </b-card-text>
                  <template #footer>
                     <button class="btn" @click="mostrarDetalle=true">
                      <small class="text-muted">
                        Ver mas
                      </small>
                    </button>
                  </template>
                </b-card>

                <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1mTxuapP5TwerpyLUJVejFOxgG-ElnwqZ" img-alt="Image" img-top class=" m-1" >
                  <b-card-text>
                    Polerón Sweet As Slab Thai Curry
                  </b-card-text>
                  <template #footer>
                     <button class="btn" @click="mostrarDetalle=true">
                      <small class="text-muted">
                        Ver mas
                      </small>
                    </button>
                  </template>
                </b-card>

                <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1Dwq-YErqz7wfeoHhF7-kykb-m5kA23Sx" img-alt="Image" img-top class=" m-1" >
                  <b-card-text>
                    Polerón Sweet As Slab Sargasso
                  </b-card-text>
                  <template #footer>
                    <button class="btn" @click="mostrarDetalle=true">
                      <small class="text-muted">
                        Ver mas
                      </small>
                    </button>
                  </template>
                </b-card>
              </b-card-group>
            </div>
            <!--  -->
          </b-tab>
          <b-tab title="Temporada">
            <!--  -->
          <b-card-group >
            <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1rcUOw8H484qtLqEauuboiDAIDEvMnAzR" img-alt="Image" class=" m-1">
              <b-card-text>
                Polerón Sweet As Slab Chili Quiksil
              </b-card-text>
              <template #footer>
                <button class="btn" @click="mostrarDetalle=true">
                  <small class="text-muted">
                    Ver mas
                  </small>
                </button>
              </template>
            </b-card>
            <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1UXspGJIgV8ejsVkHiTaGQsNMokQ5xvl3" img-alt="Image" img-top class=" m-1">
              <b-card-text>
                Polerón Keller Zip-Up Kalamata
              </b-card-text>
              <template #footer>
                <button class="btn" @click="mostrarDetalle=true">
                  <small class="text-muted">
                    Ver mas
                  </small>
                </button>
              </template>
            </b-card>
            <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1IhqhZXrA_hVXN1eKbuVPrMW18OrEIaO2" img-alt="Image" img-top class=" m-1" >
              <b-card-text>
                Polerón Keller Zip-Up Parisian N
              </b-card-text>
              <template #footer>
                 <button class="btn" @click="mostrarDetalle=true">
                  <small class="text-muted">
                    Ver mas
                  </small>
                </button>
              </template>
            </b-card>
            <b-card title="Polerón" img-src="https://drive.google.com/uc?id=1C5CSi10ivuMovam_448Gbtah-vfveXKo" img-alt="Image" img-top class=" m-1" >
              <b-card-text>
                Polerón Keller Zip-Up Light Grey H
              </b-card-text>
              <template #footer>
                 <button class="btn" @click="mostrarDetalle=true">
                  <small class="text-muted">
                    Ver mas
                  </small>
                </button>
              </template>
            </b-card>
          </b-card-group>
            <!--  -->
          </b-tab>
          <!-- <b-tab title="Todo"><p>I'm a disabled tab!</p></b-tab> -->
        </b-tabs>
      </div>
    </div>
    <!--  -->
    <!--  -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dismissSecs: 2,
        dismissCountDown: 0,
        show: false,
        value: 1,
        mostrarDetalle: false,
        selected: 's',
        options: [
          { text: 'S', value: 's' },
          { text: 'M', value: 'm' },
          { text: 'L', value: 'l' },
          { text: 'XL', value: 'xl'}
        ]
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      comprar() {
        this.show = true
        setTimeout(() => {
          this.dismissCountDown = this.dismissSecs
          this.show = false
        }, 1000)

      },
      regresar () {
        this.mostrarDetalle = false
        this.selected = 's'
        this.value = 1
      }
    }
  }
</script>
<style scoped>
  .divGaleria{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .centrar{
    display: flex;
    justify-content: center;
  }
</style>