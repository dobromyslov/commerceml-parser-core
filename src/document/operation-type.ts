/**
 * CommerceML 2.10
 * 1.1.41. ХозОперацияТип
 *
 * Определяет хозяйственную или торговую операцию.
 */
export enum OperationType {
  ORDER_PRODUCTS = 'Заказ товара',
  BILL = 'Счет на оплату',
  GOODS_ISSUE = 'Отпуск товара',
  INVOICE = 'Счет-фактура',
  GOODS_RETURN = 'Возврат товара',
  TRANSFER_GOODS_TO_COMMISSIONER = 'Передача товаров на комиссию',
  RETURN_GOODS_FROM_COMMISSIONER = 'Возврат комиссионного товара',
  COMMISSIONER_SELL_REPORT = 'Отчет о продажах комиссионного товара',
  COMMISSIONED_GOODS_WRITE_OFF_REPORT = 'Отчет о списании комиссионного товара',
  CASH_PAYOUT = 'Выплата наличных денег',
  CASH_RETURN = 'Возврат наличных денег',
  NON_CASH_PAYOUT = 'Выплата безналичных денег',
  NON_CASH_RETURN = 'Возврат безналичных денег',
  GOODS_REVALUATION = 'Переоценка товаров',
  RIGHTS_TRANSFER = 'Передача прав',
  OTHER = 'Прочее'
}
