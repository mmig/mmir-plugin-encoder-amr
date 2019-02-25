
/* plugin config definition: used by mmir-plugin-exports to generate module-config.gen.js */

/**
 * TODO add/support AMR encoder settings,
 * e.g. mode [0,8] (DEFAULT: 7)
 *
 * NOTE would need to be implemented via mmir-plugin-encoder-core(?)
 */
export interface PluginConfig {
  amrEncoder?: any;
}
