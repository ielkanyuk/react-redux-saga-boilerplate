
export const itemsListToClient = data => ({
	name: data.CompanyName,
	foreignAddress: data.CompanyForeignAddress,
	elements: data.Elements.map(doc => ({
		id: doc.Id,
		companyId: doc.CompanyId,
		companyName: doc.CompanyName,
		type: doc.Type,
		status: doc.Status,
		number: doc.DocNumber,
		date: doc.DocDate,
		modDate: doc.ModDate,
		signDateForList: doc.SignDateForList,
		amount: doc.Amount,
		currency: doc.Currency,
		formVersion: doc.FormVersion,
		transactionId: doc.TransactionId,
	})),
	type: data.type,
	totalCount: data.TotalElementsCount || 0,
	next: data.Next,
});