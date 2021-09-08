// Nếu giá trị nhập vào là undefined thì in ra dòng log

function logger(log) {
	if (typeof log === 'undefined') {
		log = 'Gia tri mac dinh!';
	}
	console.log(log);
}
logger(undefined);

// ==>

function logger(log = 'Gia tri mac dinh!') {
	console.log;
}
logger(undefined);

// &&

const logger = (log = 'Gia tri mac dinh!') => {
	console.log(log);
};
logger(undefined);
