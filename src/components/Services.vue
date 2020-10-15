<template>
  <div class="service">
    <div v-if="isEditing">
      <h2>Edit service</h2>
      <div class="info">
        <p>
        <label for="serviceName">Service Name</label>
        <input v-model="serviceName" placeholder="Your service" id="serviceName" type="text">
        </p>
        <p>
        <label for="environment">Environment</label>
        <input v-model="environment" placeholder="Your Environment" id="environment" type="text">
        </p>
        <p>
          <label>
          <toggle-button v-model="safeToFail"/> Safe to fail?
          </label>

          <span class="helper">Is it ok if this service fails?</span>
        </p>
        <p>
          <label for="errorBudget">Up time per month</label>
          <select v-model="errorBudget" id="errorBudget">
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
          <label for="redRoutes.howMany">How many people use this service?</label>
          <select v-model="redRoutes.howMany" id="redRoutes.howMany">
            <option value="4">All of the people</option>
            <option value="3">Most of the people</option>
            <option value="2">Some of the people</option>
            <option value="1">Few of the people</option>
          </select>
        </p>

        <p>
          <label for="redRoutes.howOften">How often do people use this service?</label>
          <select v-model="redRoutes.howOften" id="redRoutes.howOften">
            <option value="1">All of the time</option>
            <option value="2">Most of the time</option>
            <option value="3">Some of the time</option>
            <option value="4">Very litte of the time</option>
          </select>
        </p>

      </div>
      <div class="impacts">
        <p>
        <label for="knownImpacts">Known impacts</label>
        <textarea id="knownImpacts" v-model="knownImpacts"></textarea>
        <span class="helper">These are other services that are impacted downstream</span>
        </p>
      </div>
      <div class="slo">
        <div v-for="(slo, index) in slos" style="border-bottom:8px solid #78c0a8;">
          <p>
            <strong>Your SLO <span @click="removeSlo(index)" style="cursor:pointer">❌</a></strong>
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
        <input type="button" @click="updateService" value="Done">
      </div>

    </div>
    <div v-else>
      <h2>{{ serviceName }} <span @click="editService" style="cursor:pointer">🔧</a></h2>
      <div class="info">
        <p>Environment: <strong>{{ environment }}</strong> | <span v-if="safeToFail">Is safe to fail</span><span v-else><strong>Is not safe to fail</strong></span></p>
        <p>Error Budget: <strong>{{ errorBudget }} per Month</strong></p>
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
        <p>{{ knownImpacts }}</p>
      </div>
      <div class="slo">
        <table>
          <thead>
            <tr>
              <th colspan="3" style="background-color:#78C0A8">SLO</th>
              <th colspan="3" style="background-color:#873F57; color: #fff">Qualifying Condition (QC)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NFP</td>
              <td>Predicate</td>
              <td>Metric</td>
              <td>NFP</td>
              <td>Predicate</td>
              <td>Metric</td>
            </tr>
            <tr v-for="slo in slos">
              <td>{{ slo.slo.NFP }}</td>
              <td> {{ slo.slo.Predicate }}</td>
              <td>{{ slo.slo.Metric }}</td>
              <td>{{ slo.qc.NFP }}</td>
              <td> {{ slo.qc.Predicate }}</td>
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

export default {
  name: 'Services',
  components: {
    ToggleButton
  },
  data () {
    return {
      isEditing: false,
      serviceName: "Service name",
      environment: 'Production',
      safeToFail: true,
      errorBudget: '43m 50s',
      knownImpacts: "Service A, Service B, Service C",
      redRoutes: {
        howMany: 1,
        howOften: 4,
      },
      slos: [
        {
          slo: {
            "NFP": "Availability",
            "Predicate": ">",
            "Metric": "99.9%"
          },
          qc: {
            "NFP": "",
            "Predicate": "",
            "Metric": "",
          }
        },
        {
          slo: {
            "NFP": "Response Time",
            "Predicate": "<",
            "Metric": "40ms"
          },
          qc: {
            "NFP": "",
            "Predicate": "",
            "Metric": "",
          }
        },
        {
          slo: {
            "NFP": "Throughput",
            "Predicate": ">",
            "Metric": "100Mbps"
          },
          qc: {
            "NFP": "Network Bandwith",
            "Predicate": ">",
            "Metric": "100Mbps",
          }
        },
        {
          slo: {
            "NFP": "Capacity",
            "Predicate": ">",
            "Metric": "999GB"
          },
          qc: {
            "NFP": "",
            "Predicate": "",
            "Metric": "",
          }
        },
        {
          slo: {
            "NFP": "Redundancy",
            "Predicate": ">",
            "Metric": "200%"
          },
          qc: {
            "NFP": "",
            "Predicate": "",
            "Metric": "",
          }
        }
      ],
      newSlo: {
        slo: {
          "NFP": "",
          "Predicate": "",
          "Metric": ""
        },
        qc: {
          "NFP": "",
          "Predicate": "",
          "Metric": "",
        }
      }
    }
  },
  methods: {
    editService: function() {
      this.isEditing = true;
    },
    updateService: function() {
      this.isEditing = false;
    },
    setMatrixPostion: function(element) {
      // I see you rolling your eyes!
      switch (element) {
        case 'textX':
          return (75 * this.redRoutes.howMany) - 20;
          break;
        case 'textY':
          return (75 * this.redRoutes.howOften) - 30;
          break;
        default:
          return 0;
      }
    },
    addSlo: function() {
      var slo = Object.assign(this.newSlo, {});
      this.slos.push(slo);
    },
    removeSlo: function(evt) {
      this.slos.splice(evt, 1);
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
  max-width: 67.75rem;
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
</style>
