import { VisTypesRegistryProvider } from 'ui/registry/vis_types'
import { VisFactoryProvider } from 'ui/vis/vis_factory'
import { CATEGORY } from 'ui/vis/vis_category'
import { Schemas } from 'ui/vis/editors/default/schemas';
import { Status } from 'ui/vis/update_status';

import { DeckGlComponent } from './vis'
import { DeckGlEditorOptions } from './vis_editor_options'

const DeckGlVisType = (Private) => {
    const VisFactory = Private(VisFactoryProvider)
    return VisFactory.createReactVisualization({
        name: 'Deck.gl',
        title: 'Deck.gl',
        icon: 'visControls',
        description: 'Cool new chart',
        category: CATEGORY.OTHER,
        requiresUpdateStatus: [Status.AGGS, Status.PARAMS, Status.RESIZE, Status.UI_STATE],
        requestHandler: 'courier',
        responseHandler: 'none',
        visConfig: {
            component: DeckGlComponent,
            defaults: {
                'message': 'Hello world'
            }
        },
        editor: 'default',
        editorConfig: {
            optionsTemplate: DeckGlEditorOptions,
            schemas: new Schemas([
                {
                    group: 'metrics',
                    name: 'metric',
                    title: 'Metric',
                    min: 1,
                    aggFilter: ['!derivative', '!geo_centroid'],
                    defaults: [
                        {
                            type: 'count',
                            schema: 'metric'
                        }
                    ]
                },
                {
                    group: 'buckets',
                    name: 'Bucket 1',
                    title: 'Bucket split',
                    min: 0,
                    max: 1,
                    aggFilter: ['terms']
                }
            ])
        },
        options: {                // controls the visualize editor
            showTimePicker: true,
            showQueryBar: true,
            showFilterBar: true,
            showIndexSelection: true
        },
        feedbackMessage: ''
      })
}

VisTypesRegistryProvider.register(DeckGlVisType)
