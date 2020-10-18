<template>
  <div class="service" :id="instance.id">
    <div v-if="instance.isEditing">
      <h2>Edit service</h2>
      <div class="info">
        <p>
        <label :for="'serviceName-'+ instance.id">Service Name</label>
        <input v-model="instance.serviceName" placeholder="Your service" :id="'serviceName-'+instance.id" type="text">
        </p>
        <p>
        <label :for="'environment-'+instance.id">Environment</label>
        <input v-model="instance.environment" placeholder="Your Environment" :id="'environment-'+instance.id" type="text">
        </p>
        <p>
          <label>
          <toggle-button v-model="instance.safeToFail"/> Safe to fail?
          </label>

          <span class="helper">Is it ok if this service fails?</span>
        </p>
        <p>
          <label :for="'errorBudget-'+instance.id">Up time per month</label>
          <select v-model="instance.errorBudget" :id="'errorBudget-'+instance.id">
            <option value="7h 18m 18s">99%</option>
            <option value="43m 50s">99.9%</option>
            <option value="4m 23s">99.99%</option>
            <option value="26s">99.999%</option>
          </select>
          <span class="helper">An error budget is the maximum amount of time that a system can fail without contractual consequences based on your uptime</span>
        </p>
        <p>Business Value <br>
        <span class="helper">A measure of how many users rely on this service and how often.</span>
        </p>

        <p>
          <label :for="'redRoutes.howMany-'+instance.id">How many people use this service?</label>
          <select v-model="instance.redRoutes.howMany" :id="'redRoutes.howMany-'+instance.id">
            <option value="4">All of the people</option>
            <option value="3">Most of the people</option>
            <option value="2">Some of the people</option>
            <option value="1">Few of the people</option>
          </select>
        </p>

        <p>
          <label :for="'redRoutes.howOften-'+instance.id">How often do people use this service?</label>
          <select v-model="instance.redRoutes.howOften" :id="'redRoutes.howOften-'+instance.id">
            <option value="1">All of the time</option>
            <option value="2">Most of the time</option>
            <option value="3">Some of the time</option>
            <option value="4">Very litte of the time</option>
          </select>
        </p>

      </div>
      <div class="impacts">

        <p v-for="service in serviceList">
          <input type="checkbox" :id="'knownImpacts'+instance.id+service.id" :value="service.id" v-model="instance.knownImpacts">
  <label :for="'knownImpacts'+instance.id+service.id">{{ service.serviceName }}</label>
        </p>
        <p><span class="helper">These are other services that are impacted downstream</span></p>

        <p>
          <label :for="'deploymentFrequency-'+instance.id">Deployment Frequency?</label>
          <select v-model="instance.deploymentFrequency" :id="'deploymentFrequency-'+instance.id">
            <option value="Multiple Deploys Per Day">Multiple Deploys Per Day</option>
            <option value="Between once per hour and once per day">Between once per hour and once per day</option>
            <option value="Between once per week and once per month">Between once per week and once per month</option>
          </select>
          <span class="helper">How often do you deploy this service to this environment.</span>
        </p>

        <p>
          <label :for="'leadTime-'+instance.id">Lead time for changes?</label>
          <select v-model="instance.leadTime" :id="'leadTime-'+instance.id">
            <option value="Less than one hour">Less than one hour</option>
            <option value="Between one day and one week">Between one day and one week</option>
            <option value="Between one week and once month">Between one week and once month</option>
            <option value="Between one month and 6 months">Between one month and 6 months</option>
          </select>
          <span class="helper">The time it takes to go from code committed to code successfully running in this environment</span>
        </p>

        <p>
          <label :for="'meanTimeRestore-'+instance.id">Mean time to restore service?</label>
          <select v-model="instance.meanTimeRestore" :id="'meanTimeRestore-'+instance.id">
            <option value="Less than one hour">Less than one hour</option>
            <option value="Less than one day">Less than one day</option>
            <option value="Less than one week">Less than one week</option>
            <option value="Between one week and one month">Between one week and one month</option>
          </select>
          <span class="helper">The average time it takes to restore the service in this environment</span>
        </p>

        <p>
          <label :for="'changeFailureRate-'+instance.id">Change failure rate</label>
          <select v-model="instance.changeFailureRate" :id="'changeFailureRate-'+instance.id">
            <option value="0-15%">0-15%</option>
            <option value="16-30%">16-30%</option>
            <option value="31-45%">31-45%</option>
            <option value="46-60%">46-60%</option>
          </select>
          <span class="helper">How often deployment failures occur in this environment that require immediate remedy (e.g. rollbacks)</span>
        </p>
      </div>
      <div class="slo">
        <div v-for="(slo, index) in instance.slos" style="border-bottom:8px solid #78c0a8;">
          <p>
            <strong>Your SLO <span @click="removeSlo(index)" style="cursor:pointer">❌</span></strong>
            <input v-model="slo.slo.NFP" placeholder="Your SLO" type="text">
            <select v-model="slo.slo.Predicate">
              <option></option>
              <option value="&gt;">&gt;</option>
              <option value="&lt;">&lt;</option>
              <option value="=">&#61;</option>
            </select>
            <input v-model="slo.slo.Metric" placeholder="Your Metric" type="text">
          </p>

          <p>
            <strong>Your QC</strong>
            <input v-model="slo.qc.NFP" placeholder="Your QC" type="text">
            <select v-model="slo.qc.Predicate">
              <option></option>
              <option value="&gt;">&gt;</option>
              <option value="&lt;">&lt;</option>
              <option value="=">&#61;</option>
            </select>
            <input v-model="slo.qc.Metric" placeholder="Your Metric" type="text">
          </p>
        </div>
        <input type="button" @click="addSlo" value="Add another SLO">
      </div>

      <div class="crud-bar" style="clear:both">
        <input type="button" class="remove" @click="removeService" value="Remove"> <input type="button" @click="updateService" value="Done">
      </div>

    </div>
    <div v-else>
      <h2>{{ instance.serviceName }} <span @click="editService" style="cursor:pointer">🔧</span></h2>
      <div class="info">
        <p>Environment: <strong>{{ instance.environment }}</strong> | <span v-if="instance.safeToFail">Is safe to fail</span><span v-else><strong>Is not safe to fail</strong></span></p>
        <p>Error Budget: <strong>{{ instance.errorBudget }} per Month</strong></p>
        <p>Business Value</p>
        <svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
         <g>
          <title>background</title>
          <rect x="0" y="0" width="325" height="325" id="canvas_background" fill="none"/>
         </g>

         <g>
          <title>Background</title>
          <rect id="svg_1" height="75" width="75" y="0" x="25" stroke-width="1" stroke="#ccc" fill="#fae3e8"/>
          <rect id="svg_2" height="75" width="75" y="0" x="100" stroke-width="1" stroke="#ccc" fill="#f3a3a1"/>
          <rect id="svg_3" height="75" width="75" y="0" x="175" stroke-width="1" stroke="#ccc" fill="#ed462f"/>
          <rect id="svg_14" height="75" width="75" y="0" x="250" stroke-width="1" stroke="#ccc" fill="#ed462f"/>

          <rect id="svg_4" height="75" width="75" y="75" x="25" stroke-width="1" stroke="#ccc" fill="#fff"/>
          <rect id="svg_5" height="75" width="75" y="75" x="100" stroke-width="1" stroke="#ccc" fill="#fae3e8"/>
          <rect id="svg_6" height="75" width="75" y="75" x="175" stroke-width="1" stroke="#ccc" fill="#f3a3a1"/>
          <rect id="svg_15" height="75" width="75" y="75" x="250" stroke-width="1" stroke="#ccc" fill="#ed462f"/>

          <rect id="svg_7" height="75" width="75" y="150" x="25" stroke-width="1" stroke="#ccc" fill="#fff"/>
          <rect id="svg_8" height="75" width="75" y="150" x="100" stroke-width="1" stroke="#ccc" fill="#fff"/>
          <rect id="svg_9" height="75" width="75" y="150" x="175" stroke-width="1" stroke="#ccc" fill="#fae3e8"/>
          <rect id="svg_16" height="75" width="75" y="150" x="250" stroke-width="1" stroke="#ccc" fill="#f3a3a1"/>

          <rect id="svg_11" height="75" width="75" y="225" x="25" stroke-width="1" stroke="#ccc" fill="#fff"/>
          <rect id="svg_12" height="75" width="75" y="225" x="100" stroke-width="1" stroke="#ccc" fill="#fff"/>
          <rect id="svg_13" height="75" width="75" y="225" x="175" stroke-width="1" stroke="#ccc" fill="#fff"/>
          <rect id="svg_17" height="75" width="75" y="225" x="250" stroke-width="1" stroke="#ccc" fill="#fae3e8"/>
         </g>
         <g>
          <title>Point</title>
          <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_10" :y="textYpostion" :x="textXpostion" stroke-width="0" stroke="#000" fill="#000000">◆</text>
         </g>
          <g>
          <title>How often legend</title>
          <text transform="rotate(-90 0,0)" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="15" x="-300" stroke-width="0" stroke="#000" fill="#000000">Very little</text>
          <text transform="rotate(-90 0,0)" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="15" x="-225" stroke-width="0" stroke="#000" fill="#000000">Some</text>
          <text transform="rotate(-90 0,0)" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="15" x="-150" stroke-width="0" stroke="#000" fill="#000000">Most</text>
          <text transform="rotate(-90 0,0)" xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="15" x="-75" stroke-width="0" stroke="#000" fill="#000000">All the time</text>
         </g>
           <g>
          <title>How many people legend</title>
          <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="320" x="25" stroke-width="0" stroke="#000" fill="#000000">Few people</text>
          <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="320" x="100" stroke-width="0" stroke="#000" fill="#000000">Some people</text>
          <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="320" x="175" stroke-width="0" stroke="#000" fill="#000000">Most people</text>
          <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="12" id="svg_18" y="320" x="250" stroke-width="0" stroke="#000" fill="#000000">All people</text>
         </g>
        </svg>

      </div>
      <div class="impacts">
        <h3>Known impacts</h3>
        <p>These are other services that are impacted downstream</p>

        <ul>
          <li v-for="impact in instance.knownImpacts">
            <router-link :to="{'hash':'#'+impact}" @click.native="scrollToService('#'+impact)">{{ getServiceByRef(impact) }}</router-link></li>
        </ul>

        <h3>Deployment</h3>
        <dl>
          <dt>Deployment Frequency</dt>
          <dd>{{ instance.deploymentFrequency }}</dd>
          <dt>Lead time for changes</dt>
          <dd>{{ instance.leadTime }}</dd>
          <dt>Mean time to restore service</dt>
          <dd>{{ instance.meanTimeRestore }}</dd>
          <dt>Change failure rate</dt>
          <dd>{{ instance.changeFailureRate }}%</dd>
        </dl>
      </div>
      <div class="slo">
        <table>
          <thead>
            <tr>
              <th colspan="3" style="background-color:#78C0A8"> SLO </th>
              <th colspan="3" style="background-color:#873F57; color: #fff"> Qualifying Condition (QC) </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>NFP</strong></td>
              <td><strong>Predicate</strong></td>
              <td><strong>Metric</strong></td>
              <td><strong>NFP</strong></td>
              <td><strong>Predicate</strong></td>
              <td><strong>Metric</strong></td>
            </tr>
            <tr v-for="slo in instance.slos">
              <td>{{ slo.slo.NFP }}</td>
              <td class="predicate"> {{ slo.slo.Predicate }}</td>
              <td>{{ slo.slo.Metric }}</td>
              <td>{{ slo.qc.NFP }}</td>
              <td class="predicate"> {{ slo.qc.Predicate }}</td>
              <td>{{ slo.qc.Metric }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button';
import uuidv4 from 'uuid/v4';

export default {
  name: 'Services',
  components: {
    ToggleButton
  },
  props: ['serviceInstance', 'servicesList'],
  data () {
    return {
      instance: this.serviceInstance,
      serviceList: this.servicesList
    }
  },
  mounted() {
    if(this.instance.id === null) {
      this.instance.id = uuidv4();
    }
  },
  methods: {
    editService: function() {
      this.instance.isEditing = true;
    },
    updateService: function() {
      this.instance.isEditing = false;
    },
    removeService: function(){
      this.instance.isEditing = false;
      this.$emit('removeInstance', this.instance.id)
    },
    getServiceByRef(id) {
      var searchService = this.serviceList.filter((service) => id == service.id);
      // this feels hacky..
      return searchService[0].serviceName;
    },
    scrollToService: function(hashbang)
    {
      location.hash = hashbang;
    },
    setMatrixPostion: function(element) {
      // I see you rolling your eyes!
      switch (element) {
        case 'textX':
          return (75 * this.instance.redRoutes.howMany) - 20;
          break;
        case 'textY':
          return (75 * this.instance.redRoutes.howOften) - 30;
          break;
        default:
          return 0;
      }
    },
    addSlo: function() {
      this.instance.slos.push({...this.instance.newSlo});
    },
    removeSlo: function(evt) {
      this.instance.slos.splice(evt, 1);
    }
  },
  computed: {
    textXpostion() {
      return this.setMatrixPostion("textX");
    },
    textYpostion() {
      return this.setMatrixPostion("textY");
    }
  },
};
</script>

<style>
.service{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.info, .impacts, .slo {
  font-size: 1rem;
  width:30%;
  margin:10px;
  color: #555555;
  position: relative;
  float:left;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
.helper {
  display:block;
  font-size: 0.8rem;
  color:#999;
}
tbody tr:nth-child(odd) {
  background-color: #eee;
}

tbody tr:nth-child(even) {
  background-color: #ccc;
}
td.predicate
{
    text-align: center;
    vertical-align: middle;
}
</style>
