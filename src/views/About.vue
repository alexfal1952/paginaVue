<template>
  <div class="pt-5 pb-5">
    <b-card no-body class="overflow-hidden col-12" >
      <b-row no-gutters>
        <b-col md="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.841178054784!2d-71.20586018516163!3d-34.96058918036854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664577f2be4f9af%3A0x1321bf1cd72f1d8b!2sDon%20sebastian%20de%20rauquen!5e0!3m2!1ses-419!2scl!4v1643340658969!5m2!1ses-419!2scl" 
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
          >
          </iframe>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
               <b-overlay
                :show="show"
                spinner-variant="primary"
                spinner-type="grow"
                spinner-small
                rounded="sm"
              >
                <form  v-on:submit.prevent="onSubmit"  class="php-email-form mt-4">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input type="text" name="name"  v-model="nombre" class="form-control" id="name" placeholder="Tu Nombre" required>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" class="form-control"  v-model="email" name="email" id="email" placeholder="Tu Correo" required>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject"  v-model="asunto" id="subject" placeholder="Asunto" required>
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5"  v-model="mensaje" placeholder="Mensaje" required></textarea>
                  </div>
                  <div class="my-3">
                <div>
                    <b-alert
                      :show="dismissCountDown"
                      variant="success"
                      @dismissed="dismissCountDown=0"
                    >
                    Tus mensaje a sido enviado...
                    </b-alert>
                  </div>
                  </div>
                  <div class="text-center">
                    <b-button variant="outline-primary" type="submit">Enviar</b-button>
                  </div>
                </form>
              </b-overlay>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
        slide: 0,
        sliding: null,
        dismissSecs: 2,
        dismissCountDown: 0,
        show: false
      }
    },
    methods: {
       countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.timeoutSearch = setTimeout(() => {
          this.dismissCountDown = this.dismissSecs
          this.show = false
          this.nombre = ''
          this.email = ''
          this.asunto = ''
          this.mensaje = ''
        }, 1000)
      },
      onSubmit () {
        this.show = true
        this.showAlert()
      },
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>