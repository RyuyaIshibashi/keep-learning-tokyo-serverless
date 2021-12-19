import Vue from 'vue';
import moment from 'moment-timezone';
import VueCodeHighlight from 'vue-code-highlight';

moment.tz.setDefault('Asia/Tokyo');
Vue.prototype.$moment = moment;
Vue.use(VueCodeHighlight);
