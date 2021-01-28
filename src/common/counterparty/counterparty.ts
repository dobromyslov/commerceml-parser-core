import {ContactInfo} from '../contact';
import {Representative} from './representative';
import {Address} from '../address';
import {Director} from './director';
import {BankAccount} from './bank';

/**
 * CommerceML 2.10.
 * 1.1.59. Контрагент
 *
 * Компонент «Контрагент» описывает информацию о контрагенте (фирме, компании, предприятии, организации,
 * физическом лице и т.д.) – участнике бизнес–процесса.
 */
export interface Counterparty {
  /**
   * Элемент: Ид
   * Тип (компонент): ИдентфикаторГлобальныйТип
   * Обязат. (Множ.): [0..1]
   *
   * Глобально уникальный идентификатор контрагента (рекомендуется использовать GUID).
   */
  id?: string;

  /**
   * Элемент: Наименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [0..1]
   *
   * Наименование контрагента.
   */
  name?: string;

  /**
   * Элемент: Комментарий
   * Тип (компонент): КомментарийТип
   * Обязат. (Множ.): [0..1]
   *
   * Произвольный текст.
   */
  comment?: string;

  /**
   * Элемент: Адрес
   * Тип (компонент): Адрес
   * Обязат. (Множ.): [0..1]
   *
   * Фактический адрес контрагента.
   */
  address?: Address;

  /**
   * Элемент: Представитель
   * Тип (компонент): Представитель
   * Обязат. (Множ.): [0..n]
   *
   * Содержит описание представителей контрагента, например, контактных лиц или дочерних организаций.
   */
  representatives?: Representative[];

  /**
   * Элемент: Контакт
   * Тип (компонент): КонтактнаяИнформация
   * Обязат. (Множ.): [0..1]
   *
   * Описывает информацию о контакте, контактных лицах, телефонах, факсах, почтовых адресах, должностях и любых
   * других значимых сведениях.
   */
  contact?: ContactInfo;

  /**
   * Элемент: ИНН
   * Тип (компонент): ИННТип
   * Обязат. (Множ.): [0..1]
   *
   * Индивидуальный номер налогоплательщика (ИНН) физ. лица / ИП (12 символов) или юр. лица (10 символов).
   */
  inn?: string;

  /*********************************************************************************************************************
   * Элемент: РеквизитыФизЛица
   * Тип (компонент): РеквизитыФизЛица
   * Обязат. (Множ.): [0..1]
   *
   * Содержит описание реквизитов контрагента, специфических для физических лиц.
   ********************************************************************************************************************/

  /**
   * Элемент: ПолноеНаименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [1]
   *
   * Полное наименование физического лица. Может включать обращение и суффикс.
   */
  fullName: string;

  /**
   * Элемент: Обращение
   * Тип (компонент): ОбращениеТип
   * Обязат. (Множ.): [0..1]
   *
   * Например: Г-н, Г-жа, Докт., Проф. и т.д.
   */
  title?: string;

  /**
   * Элемент: Фамилия
   * Тип (компонент): СтрокаТип
   * Обязат. (Множ.): [0..1]
   *
   * Фамилия.
   */
  lastName?: string;

  /**
   * Элемент: Имя
   * Тип (компонент): СтрокаТип
   * Обязат. (Множ.): [0..1]
   *
   * Имя.
   */
  firstName?: string;

  /**
   * Элемент: Отчество
   * Тип (компонент): СтрокаТип
   * Обязат. (Множ.): [0..1]
   *
   * Отчество.
   */
  middleName?: string;

  /**
   * Элемент: ДатаРождения
   * Тип (компонент): ДатаТип
   * Обязат. (Множ.): [0..1]
   *
   * Дата рождения.
   */
  birthday?: Date;

  /**
   * Элемент: МестоРождения
   * Тип (компонент): Адрес
   * Обязат. (Множ.): [0..1]
   *
   * Место рождения.
   */
  birthPlace?: Address;

  /**
   * Элемент: Пол
   * Тип (компонент): ПолТип
   * Обязат. (Множ.): [0..1]
   *
   * Пол.
   * Значения:
   * - М
   * - Ж
   */
  sex?: string;

  /*********************************************************************************************************************
   * Элемент: РеквизитыЮрЛица
   * Тип (компонент): РеквизитыЮрЛица
   * Обязат. (Множ.): [0..1]
   *
   * Содержит описание реквизитов контрагента, специфических для юридических лиц.
   ********************************************************************************************************************/

  /**
   * Элемент: ОфициальноеНаименование
   * Тип (компонент): НаименованиеТип
   * Обязат. (Множ.): [1]
   *
   * Официальное наименование юридического лица в соответствии с учредительными документами.
   */
  officialName: string;

  /**
   * Элемент: КПП
   * Тип (компонент): КППТип
   * Обязат. (Множ.): [0..1]
   *
   * Код причины постановки на учет.
   */
  kpp?: string;

  /**
   * Элемент: ОсновнойВидДеятельности
   * Тип (компонент): ВидДеятельностиТип
   * Обязат. (Множ.): [0..1]
   *
   * Основной вид деятельности по учредительным документам.
   */
  businessType?: string;

  /**
   * Элемент: ЕГРПО
   * Тип (компонент): ЕГРПОТип
   * Обязат. (Множ.): [0..1]
   *
   * Код по ЕГРПО.
   */
  egrpo?: string;

  /**
   * Элемент: ОКВЭД
   * Тип (компонент): ОКВЭДТип
   * Обязат. (Множ.): [0..1]
   *
   * Код отрасли по ОКВЭД.
   */
  okved?: string;

  /**
   * Элемент: ОКДП
   * Тип (компонент): ОКДПТип
   * Обязат. (Множ.): [0..1]
   *
   * Код по ОКДП основного вида деятельности.
   */
  okdp?: string;

  /**
   * Элемент: ОКОПФ
   * Тип (компонент): ОКОПФТип
   * Обязат. (Множ.): [0..1]
   *
   * Код организационно-правовой формы организации по ОКОПФ.
   */
  okopf?: string;

  /**
   * Элемент: ОКФС
   * Тип (компонент): ОКФСТип
   * Обязат. (Множ.): [0..1]
   *
   * Код формы собственности по ОКФС.
   */
  okfs?: string;

  /**
   * Элемент: ОКПО
   * Тип (компонент): ОКПОТип
   * Обязат. (Множ.): [0..1]
   *
   * Код ОКПО организации.
   */
  okpo?: string;

  /**
   * Элемент: ДатаРегистрации
   * Тип (компонент): ДатаТип
   * Обязат. (Множ.): [0..1]
   *
   * Дата регистрации организации.
   */
  registrationDate?: Date;

  /**
   * Элемент: ЮридическийАдрес
   * Тип (компонент): Адрес
   * Обязат. (Множ.): [0..1]
   *
   * Юридический адрес.
   */
  legalAddress?: Address;

  /**
   * Элемент: Руководитель
   * Тип (компонент): Руководитель
   * Обязат. (Множ.): [0..1]
   *
   * Руководитель организации.
   */
  director?: Director;

  /**
   * Элемент: РасчетныеСчета
   * Тип (компонент): РасчетныйСчет
   * Обязат. (Множ.): [0..n]
   *
   * Содержит описание расчетных счетов организации.
   */
  bankAccounts?: BankAccount[];
}
