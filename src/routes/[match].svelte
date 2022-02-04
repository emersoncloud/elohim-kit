<script>
    import { page } from "$app/stores";
    import { App } from "$lib/App.svelte";
</script>

{$page.params.match}
<App/>