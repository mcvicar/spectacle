<template>
  <div class="about">
    <h1>About Spectable</h1>

    <p>Spectable is a <abbr title="Proof of Concept">PoC</abbr> based on the idea of capturing and displaying <abbr title="Service Level Indicator">SLIs</abbr>, <abbr title="Service Level Objective">SLOs</abbr>, <abbr title="Service Level Agreement">SLAs</abbr> and bringing them closer to the business value.</p>

    <p>It's based on mashing together two ideas; <a href="https://blog.acolyer.org/2019/07/05/automating-chaos-experiments-in-production/">Netflix's Monocle dashboard</a>, (except it isn't automated to any actual chaos engineering tests) and the product management idea of "<a href="https://web.archive.org/web/20160420201131/http://www.userfocus.co.uk/articles/prioritising-functions.html">Red Routes</a>".</p>

    <p>Norah Jones mentions in her great talk <a href="https://www.infoq.com/presentations/rethinking-chaos-engineering/">Rethinking Chaos Engineering</a>, the value of the dashboard was in giving teams visablity to their own assumptions, downstream impacts, etc. I thought that was worth exploring by adding in a layer of business value to it (e.g. how many users rely on this service and how often).</p>

    <p>After I had done that, I had another idea - why not add the metrics from <a href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339">Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations</a>. In an ideal world you could get your Repo + CI/CD pipeline to calculate these results. But hey, ¯\_(ツ)_/¯ PoC.</p>

    <h3><abbr title="Service Level Indicator">SLIs</abbr>, <abbr title="Service Level Objective">SLOs</abbr>, <abbr title="Service Level Agreement">SLAs</abbr>? I'm sorry a what?</h3>
    <p>When building a service, we have a should define some baseline agreements as to the service’s expected uptime and performance based on their business value.</p>
    <dl>
      <dt>Service Level Indicator (<abbr title="Service Level Indicator">SLIs</abbr>)</dt>
      <dd>What the service owner has chosen to measure progress towards their goal.</dd>
      <dt>Service Level Objective (<abbr title="Service Level Objective">SLOs</abbr>)</dt>
      <dd>What the service owner’s goal is for the given indicator.</dd>
      <dt>Service Level Agreement (<abbr title="Service Level Agreement">SLAs</abbr>)</dt>
      <dd>What the service owner is promising its users (typically the <abbr title="Service Level Objective">SLOs</abbr> + wiggle room).</dd>
    </dl>

    <h4>Example</h4>
    <ul>
      <li><strong>Indicator</strong>: request latency.</li>
      <li><strong>Objective</strong>: 99.5% of requests will be completed in 5ms.</li>
      <li><strong>Agreement</strong>: 99% of requests complete in 5ms or you get a refund.</li>
    </ul>
  </div>
</template>
