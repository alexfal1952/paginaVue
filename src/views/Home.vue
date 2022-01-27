<template>
<div>
  <div class="pt-5">
    <b-card
      overlay
      img-src="https://drive.google.com/uc?id=1Eal6b9K1rBwPUATtJ442Osll_s_HmB30"
      img-alt="Tienda"
      text-variant="white"
      title="Tienda"
      sub-title=""
    >
    <b-card-text>.</b-card-text>
    </b-card>
  </div>
  <!--  -->
  <div class="pt-4">
    <b-jumbotron header="" lead="Destacado">
      <p>destacado</p>
    </b-jumbotron>
  </div>
  <!--  -->
  <div>
    <b-card-group>
      <b-card title="Title" class="m-1 imagenCatalogo" img-src="https://drive.google.com/uc?id=1qWfxOXovuQITvhlDTKl_sxT-u_v70_EJ" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
      <b-card title="Title" class="m-1 imagenCatalogo" img-src="https://drive.google.com/uc?id=1pFuOOJa630yHT5tpsNQbyvH7ohS53YzL" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
      <b-card title="Title" class="m-1 imagenCatalogo" img-src="https://drive.google.com/uc?id=1dkEWr6vBxKd8M8hxrnRw2BIAFQJeqVPm" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
       <b-card title="Title" class="m-1 imagenCatalogo" img-src="https://drive.google.com/uc?id=1I0Xf4tvgMF-VUs8VBLbYg1cAk1tVP2ku" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="pt-5">
    <div>
      <b-card-group>
        <b-card no-body class="overflow-hidden" style="max-width: 50%;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card no-body class="overflow-hidden " style="max-width: 50%;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
       </b-card-group>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>