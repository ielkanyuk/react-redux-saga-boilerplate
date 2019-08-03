import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class DefaultLayerLayout extends React.Component {
    static propTypes = {
        layerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        onCloseLayer: PropTypes.func.isRequired,
    };

    constructor() {
        super();
        const { layerId } = this.props;

        this.layerOptions = {
            ref: (el) => {
                this.el = el;
            },
            'data-layer': layerId,
        };
    }

    componentDidMount() {
        this.openLayer();
    }

    getElement() {
        if (!this.el) {
            //eslint-disable-next-line no-console
            console.warn('Отсутствует layerOptions в article-элементе слоя');
            // eslint-disable-next-line react/no-find-dom-node
            return ReactDOM.findDOMNode(this);
        }
        return this.el;
    }

    getToggleButton() {
        const { layerId } = this.props;

        return (
            <a
                id={`page_expand_${layerId}`}
                className="page_expand icon-fullsize"
                onClick={::this.toggleFullSize}
            />
        );
    }

    getCloseButton() {
        return (<a className="page_close icon-close" onClick={::this.closeLayer} />);
    }

    addClass(el, className) {
        el.classList.add(className);
    }

    removeClass(el, className) {
        el.classList.remove(className);
    }

    closeLayer() {
        const { onCloseLayer, layerId } = this.props;
        onCloseLayer({ layerId });
    }

    toggleFullSize() {
        const { layerId } = this.props;
        const el = this.getElement();
        const btn = el.querySelector(`#page_expand_${layerId}`);

        if (this.fullSize) {
            this.removeClass(el, 'fullsize');
            this.removeClass(btn, 'rotate');
            this.fullSize = false;
        } else {
            this.fullSize = true;
            this.addClass(btn, 'rotate');
            this.addClass(el, 'fullsize');
        }

        return false;
    }

    openLayer() {
        const el = this.getElement();

        if (el) {
            setTimeout(() => this.addClass(el, 'open'), 100);
        }
    }

    render() {
        const { children } = this.props;

        return (
            <article className="page" {...this.layerOptions}>
                <div className="page_header header_height_auto">
                    {this.getCloseButton()}
                    {this.getToggleButton()}
                    <h1>Тестовый слой</h1>
                </div>
                <div className="page_content">
                    {children}
                </div>
            </article>
        );
    }
}

export default DefaultLayerLayout;