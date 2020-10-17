<template>
  <div class="home">
    <section id="intro">
      <h1>Spectacle</h1>
      <p>A PoC based on the idea of capturing and displaying SLIs, SLOs, SLAs and bringing them closer to understanding the business value.</p>
    </section>
    <div v-for="instance in serviceInstances">
      <component :is="service" :serviceInstance="instance" @removeInstance="removeService($event)"></component>
    </div>
    <div class="crud-bar">
      <input type="button" @click="addService" value="Add another Service">
    </div>
  </div>
</template>

<script>
import uuidv4 from 'uuid/v4';

export default {
  name: 'Home',
  components: {
    'services' : () => import('@/components/Services.vue')
  },
  data () {
    return {
      service: 'services',
      serviceInstances: [{
        id: uuidv4(),
        isEditing: false,
        serviceName: "Service name",
        environment: 'Production',
        safeToFail: true,
        errorBudget: '43m 50s',
        knownImpacts: "Service A, Service B, Service C",
        redRoutes: {
          howMany: 3,
          howOften: 2,
        },
        deploymentFrequency: "Multiple Deploys Per Day",
        leadTime: "Less than one hour",
        meanTimeRestore: "Less than one day",
        changeFailureRate: "46-60%",
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
      }],
      newService: {
        id: null,
        isEditing: false,
        serviceName: "Service name",
        environment: 'Production',
        safeToFail: true,
        errorBudget: '43m 50s',
        knownImpacts: "Service A, Service B, Service C",
        redRoutes: {
          howMany: 3,
          howOften: 2,
        },
        deploymentFrequency: "Multiple Deploys Per Day",
        leadTime: "Less than one hour",
        meanTimeRestore: "Less than one day",
        changeFailureRate: "46-60%",
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
    }
  },
  mounted() {
    if (localStorage.getItem('services')){
      this.serviceInstances = JSON.parse(localStorage.getItem('services'));
    }
  },
  methods: {
  	addService: function(){
      this.serviceInstances.push({...this.newService});
    },
    removeService: function(instance) {
      this.serviceInstances.filter( (inst, index, arr) => {
        if(instance == inst.id) {
          arr.splice(index, 1);
        }
      })
    }
  },
  watch: {
    serviceInstances: {
      handler() {
        localStorage.setItem('services', JSON.stringify(this.serviceInstances));
      },
      deep: true,
    },
  },
};
</script>
