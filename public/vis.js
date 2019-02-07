import { toastNotifications } from 'ui/notify'
import React, { Component, Fragment } from 'react'

import DeckGL, { LineLayer, ScatterplotLayer } from 'deck.gl'
import { StaticMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

// const notify =  new Notifier({ location: 'deck.gl' })
const MAPBOX_ACCESS_TOKEN = "please provide"

if (!MAPBOX_ACCESS_TOKEN) {
    toastNotifications.addDanger('DeckGL plugin: Please provide a MAPNOX_ACCESS_TOKEN')
}

const initialViewState = {
  latitude: 37.785164,
  longitude: -122.41669,
  zoom: 16,
  bearing: -20,
  pitch: 60
}

const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

export class DeckGlComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.renderComplete()
    }

    render() {
        const layers = [
            new LineLayer({id: 'line-layer', data})
        ];

        return (
            <DeckGL initialViewState={initialViewState} controller={true} layers={layers} >
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
                <LineLayer
                    data={[{sourcePosition: [-122.41669, 37.7883], targetPosition: [-122.41669, 37.781]}]}
                    strokeWidth={5}
                />
                <ScatterplotLayer
                          data={[{position: [-122.41669, 37.79]}]}
                          radiusScale={15}
                          getColor={x => [0, 0, 255]}
                />
            </DeckGL>
        )
    }
}