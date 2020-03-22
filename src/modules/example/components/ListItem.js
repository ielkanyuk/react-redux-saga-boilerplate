import React from 'react';
import PropTypes from 'prop-types';

export class ListItem extends React.Component {
    static propTypes = {
		data: PropTypes.object,
		open: PropTypes.func,
		clientId: PropTypes.string,
    };
    static defaultProps = {
        data: {
            name: '',
            slides: 0,
            views: 0,
            answers: 0,
			id: '',
			amount: 0,
			currency: '',
			signDateForList: null,
			clientId: null,
		},
		open: () => null,
    };

    render() {
		const { number, date, modDate, status, type, amount, currency, signDateForList } = this.props.data;
		const { open } = this.props;

        return (
			<tr>
				<td onClick={open}>{number}</td>
				<td onClick={open}>
					<p className="mb4">{dateHelper.dateFormat(type === documentsEnum.TYPES.CURRENCY_TRANSFER_INCOME ? date : modDate, 'dateTime')}</p>
					{
						signDateForList &&
						<p className="f_xsmall">Дата подписания: {dateHelper.dateFormat(signDateForList, 'dateTime')}</p>
					}
				</td>
				<td onClick={open}>{getLabelFromArray(documentTypes, type, '')}</td>
				<td onClick={open}><AmountFormat value={amount} currency={null}/>{currency}</td>
            </tr>
        );
    }
}

export default ListItem;
