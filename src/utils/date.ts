import { log } from 'console';
import { format, isToday, isYesterday, differenceInDays } from 'date-fns';

export const orderDate = (date: Date | undefined) => {
	if (typeof date === 'undefined') {
		return;
	} else if (isToday(date)) {
		return `Сегодня, ${format(date, 'H:mm OOO')}`;
	} else if (isYesterday(date)) {
		return `Вчера, ${format(date, 'H:mm OOO')}`;
	} else if (differenceInDays(Date.now(), date) < 5) {
		return `${differenceInDays(Date.now(), date)} дня назад, ${format(
			date,
			'H:mm OOO'
		)}`;
	} else if (differenceInDays(Date.now(), date) < 8) {
		return `${differenceInDays(Date.now(), date)} дней назад, ${format(
			date,
			'H:mm OOO'
		)}`;
	} else {
		return format(date, 'd.M.y');
	}
};
