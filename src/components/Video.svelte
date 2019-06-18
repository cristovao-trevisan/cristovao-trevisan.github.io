<script>
  export let src
  export let title

  export let width
  export let maxWidth
  export let ratio = 16/9
</script>

<div style="width: {width}; max-width: {maxWidth}">
  <div class="video-container" style="padding-bottom: {100/ratio}%">
    <iframe title={title} width="560" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<style>
	.video-container {
		position: relative;
    overflow: hidden;
	}

	.video-container iframe {
		background-color: #0002;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
