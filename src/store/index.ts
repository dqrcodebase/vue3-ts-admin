import { mapState } from "pinia";
import userStore from "./user";
export default {
  computed: {
    ...mapState(userStore, {}),
  },
};
