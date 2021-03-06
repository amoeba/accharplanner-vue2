<template>
  <div class="headers">
    <div class="header">
      <div>
        <div class="header-title" v-on:click="toggleCharacterPane">
          <div>
            <h3>Character</h3>
          </div>
        </div>
        <div v-if="characterPaneVisible" class="header-items">
          <div>Name</div>
          <div>
            <input class="w100" id="charname" type="text" v-model="name" />
          </div>
          <div>Race</div>
          <div>
            <select v-model="race">
              <option v-for="race in races" v-bind:key="race">{{ race }}</option>
            </select>
          </div>
          <div>Gender</div>
          <div>
            <input type="radio" id="female" value="Female" v-model="gender" />
            <label for="female">Female</label>
            <input type="radio" id="male" value="Male" v-model="gender" />
            <label for="male">Male</label>
          </div>
          <div>Level</div>
          <div class="flex-row">
            <div class="w70">
              <input class="w100" type="range" min="1" max="275" v-model="level" />
            </div>
            <div class="w30 right">
              <input class="number w100" type="text" v-bind:value="level" v-on:change="updateLevel" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <div>
        <div class="header-title" v-on:click="toggleXPAndLuminancePane">
          <div>
            <h3>XP &amp; Luminance</h3>
          </div>
        </div>
        <div v-if="xpAndLuminancePaneVisible" class="header-items">
          <div>Unassigned</div>
          <div class="right">{{ unassignedXP }}</div>
          <div>Spent</div>
          <div class="right">{{ totalXPInvested }}</div>
          <div>Total</div>
          <div class="right">{{ totalXPEarned }}</div>
          <div>Required Level</div>
          <div class="right" v-bind:class="isOverspent ? 'red' : 'gray'">{{ requiredLevel }}</div>
          <div>Luminance Spent</div>
          <div class="right">{{ totalLuminanceXPSpent }}</div>
        </div>
      </div>
    </div>
    <div class="header">
      <div>
        <div class="header-title" v-on:click="toggleKnobsAndDialsPane">
          <div>
            <h3>Knobs &amp; Dials</h3>
          </div>
        </div>
        <div v-if="knobsAndDialsPaneVisible" class="header-items">
          <div>Invested</div>
          <div>
            <input
              class="w100"
              type="range"
              min="0"
              max="226"
              value="0"
              v-on:change="changeAllInvestments"
            />
          </div>
          <div>Buffs</div>
          <div>
            <select v-on:change="changeAllBuffs">
              <option value="0"></option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
              <option value="6">VI</option>
              <option value="7">VII</option>
              <option value="8">VIII</option>
            </select>
          </div>
          <div>Cantrips</div>
          <div>
            <select v-on:change="changeAllCantrips">
              <option value="0"></option>
              <option value="1">Minor</option>
              <option value="2">Major</option>
              <option value="3">Epic</option>
              <option value="4">Legen.</option>
            </select>
          </div>
          <div>Enlightened</div>
          <div class="flex-row">
            <div class="w70">
              <input type="range" min="0" max="5" value="0" v-model="timesEnlightened" />
            </div>
            <div class="w30 right">
              <input
                class="number"
                type="text"
                min="0"
                max="5"
                value="0"
                v-model="timesEnlightened"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ExtraSkillCredits class="header" />
  </div>
</template>

<script>
import ExtraSkillCredits from "./ExtraSkillCredits.vue";
import {
  MIN_LEVEL,
  MAX_LEVEL,
  MIN_TIMES_ENLIGHTENDED,
  MAX_TIMES_ENLIGHTENDED
} from "../constants";
import { Race } from "../types";

export default {
  name: "Headers",
  components: {
    ExtraSkillCredits
  },
  computed: {
    characterPaneVisible() {
      return this.$store.getters.characterPaneVisible;
    },
    xpAndLuminancePaneVisible() {
      return this.$store.getters.xpAndLuminancePaneVisible;
    },
    knobsAndDialsPaneVisible() {
      return this.$store.getters.knobsAndDialsPaneVisible;
    },
    extraSkillCreditsPaneVisible() {
      return this.$store.getters.extraSkillCreditsPaneVisible;
    },
    totalXPEarned() {
      return Number(this.$store.getters.totalXPEarned).toLocaleString();
    },
    totalXPInvested() {
      return Number(this.$store.getters.totalXPInvested).toLocaleString();
    },
    unassignedXP() {
      return Number(this.$store.getters.unassignedXP).toLocaleString();
    },
    isOverspent() {
      return (
          (Number(this.$store.getters.totalXPInvested) > Number(this.$store.getters.totalXPEarned)) ||
          (this.$store.getters.skillPointsSpent > this.$store.getters.skillPointsAvailable)
      );
    },
    skillPointsSpent() {
      return this.$store.getters.skillPointsSpent;
    },
    skillPointsAvailable() {
      return this.$store.getters.skillPointsAvailable;
    },
    augmentationsSpent() {
      return this.$store.getters.augmentationsSpent;
    },
    requiredLevel() {
      return this.$store.getters.requiredLevel;
    },
    totalLuminanceXPSpent() {
      return this.$store.getters.totalLuminanceXPSpent.toLocaleString();
    },
    name: {
      get() {
        return this.$store.state.build.character.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      }
    },
    level: {
      get() {
        return this.$store.state.build.character.level;
      },
      set(value) {
        this.$store.commit("updateLevel", value);
      }
    },
    races() {
      return Object.keys(Race);
    },
    race: {
      get() {
        return this.$store.state.build.character.race;
      },
      set(value) {
        this.$store.commit("updateRace", value);
      }
    },
    gender: {
      get() {
        return this.$store.state.build.character.gender;
      },
      set(value) {
        this.$store.commit("updateGender", value);
      }
    },
    timesEnlightened: {
      get() {
        return this.$store.state.build.character.timesEnlightened;
      },
      set(value) {
        this.$store.commit("updateTimesEnlightened", value);
      }
    },
    exportedCharacter() {
      return this.$store.getters.exportedCharacter;
    }
  },
  methods: {
    toggleCharacterPane() {
      this.$store.commit("toggleCharacterPane");
    },
    toggleXPAndLuminancePane() {
      this.$store.commit("toggleXPAndLuminancePane");
    },
    toggleKnobsAndDialsPane() {
      this.$store.commit("toggleKnobsAndDialsPane");
    },
    toggleExtraSkillCreditsPane() {
      this.$store.commit("toggleExtraSkillCreditsPane");
    },
    updateLevel(e) {
      let actual = Math.round(Number(e.target.value));

      if (isNaN(actual) || actual < MIN_LEVEL) {
        actual = MIN_LEVEL;
      } else if (actual > MAX_LEVEL) {
        actual = MAX_LEVEL;
      }

      this.$store.commit("updateLevel", actual);
    },
    changeAllInvestments(e) {
      this.$store.commit("changeAllInvestment", e.target.value);
    },
    changeAllBuffs(e) {
      this.$store.commit("changeAllBuffs", e.target.value);
    },
    changeAllCantrips(e) {
      this.$store.commit("changeAllCantrips", e.target.value);
    }
  }
};
</script>
