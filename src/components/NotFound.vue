<template>
    <div class="error-section">
      <div class="error-content">
        <div class="error-left">
          <img alt="404-image" class="error-image" :src="ErrorImageURL"/>
        </div>
        <div class="error-right">
          <h1 class="error-right-header">Lost in space?</h1>
          <p class="error-left-description">
            It looks like that page doesn't exist <br/>
            please check the URL and try again.
          </p>
          <RouterLink class="error-button" to="/">
            Go Back Home
          </RouterLink>
        </div>
      </div>
    </div>
</template>

<script setup>
import ErrorImageURL from '/404-image.svg?url';
</script>