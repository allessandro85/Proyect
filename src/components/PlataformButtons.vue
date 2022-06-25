<template>
    <div class="row q-ma-xs">        
        <div class="col-12">
            <q-btn color="primary" text-color="white" square size="md" >
                <a href="http://wordpress.com/"  target="blank" style="text-decoration:none; color:rgb(255, 255, 255)" >WordPress</a>
                <q-tooltip :delay="200" anchor="bottom left" self="bottom left" :offset="[2,30]" content-style="font-size: 11px">
                    Go to WordPress
                </q-tooltip>
            </q-btn>
            <q-btn color="secondary" text-color="white" square size="md" >
                <a href="http://Webly.com/" target="blank" style="text-decoration:none; color:rgb(255, 255, 255)">Webly</a>
                <q-tooltip :delay="200" anchor="bottom left" self="bottom left" :offset="[2,30]" content-style="font-size: 11px">
                    Go to Webly
                </q-tooltip>
            </q-btn>
            <q-btn color="info" text-color="white" square size="md">
                <a href="http://Bootstrap.com/" target="blank" style="text-decoration:none; color:rgb(255, 255, 255)">Bootstrap</a>
                <q-tooltip :delay="200" anchor="bottom left" self="bottom left" :offset="[2,30]" content-style="font-size: 11px">
                    Go to Bootstrap
                </q-tooltip>
            </q-btn>
            <q-btn color="positive" text-color="white" square size="md">
                <a href="http://Wix.com/" target="blank" style="text-decoration: none; color:rgb(255, 255, 255)">Wix</a>
                <q-tooltip :delay="200" anchor="bottom left" self="bottom left" :offset="[2,30]" content-style="font-size: 11px">
                    Go to Wix
                </q-tooltip>
            </q-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlataformButtons',
}
</script>