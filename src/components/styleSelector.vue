<template>
  <section class="styles container flex-row">
    <div class="selected-style flex-row">
      <p class="legend">Style:</p>
      <transition name="fade" mode="out-in">
        <p class="current-style" :key="styleName">
          <a :href="anchorTag">{{ styleName }}</a>
        </p>
      </transition>
    </div>

    <div class="style-options flex-row">
      <label class="style-label flex-row" v-for="style in styles" :key="style.abb" :for="style.abb">
        {{ style.abb }}
        <input
          type="radio"
          class="radio-button"
          :id="style.abb"
          name="style"
          :value="style.abb"
          :aria-label="style.name"
          v-model="picked"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      styles: [
        {
          abb: "AP",
          name: "Associated Press"
        },
        {
          abb: "APA",
          name: "American Psychological Association"
        },
        {
          abb: "CMS",
          name: "Chicago Manual of Style"
        },
        {
          abb: "MLA",
          name: "Modern Language Association"
        },
        {
          abb: "NYT",
          name: "New York Times"
        },
        {
          abb: "WP",
          name: "Wikipedia"
        }
      ],
      picked: "AP"
    };
  },
  computed: {
    styleName() {
      let styleName = this.styles.find(o => o.abb === this.picked);
      return styleName.name;
    },
    anchorTag: function() {
      return "#" + this.picked + "_rule";
    }
  },
  mounted() {
    if (localStorage.style) {
      this.picked = localStorage.style;
      this.$emit("selectedStyle", { style: this.picked });
    }
  },
  watch: {
    picked(newStyle) {
      localStorage.style = newStyle;
      this.$emit("selectedStyle", { style: this.picked });
    }
  }
};
</script>

<style lang="stylus" scoped>
.styles {
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid cap-border;
  border-top-left-radius: cap-border-radius;
  border-top-right-radius: cap-border-radius;
}

.selected-style {
  align-items: center;
  flex: 100%;
  font-weight: 600;
  color: cap-border;
}

@media (min-width: tablet) {
  .selected-style {
    flex: 1;
  }
}

.legend {
  margin: 0;
}

.fade-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  transform: translateY(0);
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  transform: translateY(10px);
  opacity: 0;
}

.current-style {
  margin: 0 0 0 0.5em;

  a {
    color: cap-border;
    text-decoration: none;
  }
}

.style-options {
  align-items: center;
  flex: 100%;
  margin-top: 10px;
}

@media (min-width: tablet) {
  .style-options {
    flex: 1;
  }
}

.style-label {
  // for accessibility
  min-width: 48px;
  align-items: center;
  position: relative;
  padding-left: 1.25em;
  margin-right: 1.5em;
  margin-bottom: 0.5em;
  cursor: pointer;
  font-weight: 600;
  color: cap-border;
  user-select: none;
  transition: all 0.2s ease-out;

  &:last-child {
    margin-right: 0;
  }
}

.style-label input {
  position: absolute;
  height: 48px;
  min-width: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  margin-left: -1.25em;
}

.checkmark {
  position: absolute;
  top: 0.25em;
  left: 0;
  height: 1em;
  width: 1em;
  border: 3px solid cap-border;
  border-radius: 50%;
  transition: all 0.2s ease-out;
}

// .style-label:hover input ~ .checkmark, .style-label:focus input ~ .checkmark {
// background-color: lighten(cap-border, 75%);
// }
.style-label input:focus ~ .checkmark {
  border: 3px solid cap-dark-gray;
  z-index: 100;
  background: none;
}

/* When the radio button is checked, add a blue background */
.style-label input:checked ~ .checkmark {
  background-color: cap-border;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.style-label input:checked ~ .checkmark:after {
  display: block;
}

@media (min-width: tablet) {
  .style-options {
    margin-top: 0;
  }

  .style-label {
    margin-bottom: 0;
  }
}
</style>