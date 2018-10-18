import React, { Component } from 'react'

import {
    EuiButton,
    EuiForm,
    EuiText
} from '@elastic/eui'

export class DeckGlEditorOptions extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount()  {
    }

    render() {
        
        const paramString = JSON.stringify(this.props.editorState.params, null, 4) 
        return (
            <EuiForm>
                <EuiText>{paramString}</EuiText>
            </EuiForm>
        )
    }
}