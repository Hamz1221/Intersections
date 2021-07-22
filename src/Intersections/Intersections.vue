<template>
    <div>
        <iv-visualisation :title="pageName" :vue_config="vue_config" :page_number="1">
            <template #hotspots>
                <iv-pane position="left" format="overlay">
                    <iv-sidebar-content>
                        <iv-sidebar-section title="Guidance" icon="star">
                            Directions on how to use vis
                        </iv-sidebar-section>
                    </iv-sidebar-content>
                </iv-pane>
                <iv-toggle-hotspot position="bottom">
                    <div style="display:block;" id="buttons">
                    <iv-button>Add Plane</iv-button>
                    <iv-button>Add Line</iv-button>
                    <iv-button>Add Point</iv-button>
                    </div>
                </iv-toggle-hotspot>
                <iv-fixed-hotspot position="right"></iv-fixed-hotspot>
            </template>
        </iv-visualisation>
    </div>
</template>
<script>
import vue_config from '../../vue.config.js'
export default {
    name:"intersections",
    data(){
        return {
            pageName:"Intersections",
            vue_config
        }
    }
}
</script>
<style>
 #buttons > *:not(:last-child){
     margin-right: 7px;
 }
</style>