<template>
  <base-container title="Eduction">
    <div class="col-md-12 pt-3">
      <ul class="timeline timeline-split">
        <single-eduction v-for="edu in eduction" :key="edu.id" :edu="edu" />
      </ul>
    </div>
  </base-container>
</template>
<script>
import SingleEduction from "./SingleEduction.vue";
import BaseContainer from "../reusable/BaseContainer.vue";

export default {
  props: ["eduction"],
  name: "EductionTable",
  components: {
    SingleEduction,
    BaseContainer,
  },
};
</script>
<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #3d4351;
  margin-top: 0;
}
li {
  margin-bottom: 10px;
}
a {
  color: $primary;
  text-decoration: none;

  &:hover {
    color: #ff9a9a;
    text-decoration: none;
  }
}
.example-header {
  background: #3d4351;
  color: #fff;
  font-weight: 300;
  padding: 3em 1em;
  text-align: center;

  h1 {
    color: #fff;
    font-weight: 300;
    margin-bottom: 20px;
  }
  p {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 700;
  }
}
.container-fluid .row {
  padding: 0 0 4em 0;

  &:nth-child(even) {
    background: #f1f4f5;
  }
  p {
    margin: 0 auto;
    font-size: 16px;
    max-width: 400px;
  }
}
.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 700px;
  margin: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: inherit;
  }
}
.timeline-item {
  padding-left: 40px;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
}
.timeline-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  white-space: nowrap;
}
.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;

  &:before {
    background: $primary;
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  &:after {
    content: "";
    width: 3px;
    background: #ccd5db;
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }
}
.timeline-item {
  &:last-child .timeline-marker:after {
    content: none;
  }
  &:not(.period):hover .timeline-marker:before {
    background: transparent;
    border: 3px solid $primary;
  }
}
.timeline-content {
  padding-bottom: 40px;

  p:last-child {
    margin-bottom: 0;
  }
}
.period {
  padding: 0;

  .timeline-info {
    display: none;
  }
  .timeline-marker {
    &:before {
      background: transparent;
      content: "";
      width: 15px;
      height: auto;
      border: none;
      border-radius: 0;
      top: 0;
      bottom: 30px;
      position: absolute;
      border-top: 3px solid #ccd5db;
      border-bottom: 3px solid #ccd5db;
    }
    &:after {
      content: "";
      height: 32px;
      top: auto;
    }
  }
  .timeline-content {
    padding: 40px 0 70px;
  }
  .timeline-title {
    margin: 0;
  }
}
@media (min-width: 768px) {
  .timeline-split .timeline,
  .timeline-centered .timeline {
    display: table;
  }
  .timeline-split .timeline-item,
  .timeline-centered .timeline-item {
    display: table-row;
    padding: 0;
  }
  .timeline-split .timeline-info,
  .timeline-centered .timeline-info,
  .timeline-split .timeline-marker,
  .timeline-centered .timeline-marker,
  .timeline-split .timeline-content,
  .timeline-centered .timeline-content,
  .timeline-split .period .timeline-info,
  .timeline-centered .period .timeline-info {
    display: table-cell;
    vertical-align: top;
  }
  .timeline-split .timeline-marker,
  .timeline-centered .timeline-marker {
    position: relative;
  }
  .timeline-split .timeline-content,
  .timeline-centered .timeline-content {
    padding-left: 30px;
  }
  .timeline-split .timeline-info,
  .timeline-centered .timeline-info {
    padding-right: 30px;
  }
  .timeline-split .period .timeline-title,
  .timeline-centered .period .timeline-title {
    position: relative;
    left: -45px;
  }
}

@media (min-width: 992px) {
  .timeline-centered {
    display: block;
    margin: 0;
    padding: 0;

    .timeline-item,
    .timeline-info,
    .timeline-marker,
    .timeline-content {
      display: block;
      margin: 0;
      padding: 0;
    }
    .timeline-item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .timeline-marker {
      position: absolute;
      left: 50%;
      margin-left: -7.5px;
    }
    .timeline-info,
    .timeline-content {
      width: 50%;
    }
    > .timeline-item {
      &:nth-child(odd) {
        .timeline-info {
          float: left;
          text-align: right;
          padding-right: 30px;
        }
        .timeline-content {
          float: right;
          text-align: left;
          padding-left: 30px;
        }
      }
      &:nth-child(even) {
        .timeline-info {
          float: right;
          text-align: left;
          padding-left: 30px;
        }
        .timeline-content {
          float: left;
          text-align: right;
          padding-right: 30px;
        }
      }
      &.period .timeline-content {
        float: none;
        padding: 0;
        width: 100%;
        text-align: center;
      }
    }
    .timeline-item.period {
      padding: 50px 0 90px;
    }
    .period {
      .timeline-marker:after {
        height: 30px;
        bottom: 0;
        top: auto;
      }
      .timeline-title {
        left: auto;
      }
    }
  }
}

.marker-outline {
  .timeline-marker:before {
    background: transparent;
    border-color: $primary;
  }
  .timeline-item:hover .timeline-marker:before {
    background: $primary;
  }
}
</style>
