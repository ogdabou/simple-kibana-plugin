export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    id: 'deck_gl',
    name: 'Deck.gl',
    uiExports: {
      visTypes: ['plugins/deck_gl/vis_type.js']
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
