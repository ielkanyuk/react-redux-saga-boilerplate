import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import * as actions from '../actions/itemsActions';
import * as selectors from '../selectors/itemsSelectors';
import ListItem from '../components/ListItem';

const mapStateToProps = state => ({
	items: selectors.getItems(state.items),
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		getItems: actions.items.request,
	}, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class List extends React.Component {
    static propTypes = {
        getItems: PropTypes.func,
		items: PropTypes.array,
		history: PropTypes.object,
    };
    static defaultProps = {
        getItems: () => null,
        items: [],
    };
    constructor(props) {
		super(props);
    }

    componentDidMount() {
        this.props.getItems();
    }
    
	open(item) {

    }
    
    render() {
        return (
            <React.Fragment>
				<table className="table table-vk-docs">
					<thead>
					<tr>
						<th className="number">№</th>
						<th className="date">Дата</th>
						<th className="doctype">Тип документа</th>
						<th className="summ">Сумма</th>
						<th className="status">Статус</th>
						<th className="download"></th>
					</tr>
					</thead>
					<tbody>
						{this.props.items.map((item) => (
								<ListItem
									key={item.id}
									data={item}
									open={() => this.open(item)}
								/>
							))
						}
					</tbody>
				</table>
            </React.Fragment>
        );
    }
}