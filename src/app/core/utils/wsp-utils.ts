import { Cart } from 'src/app/shared/models/cart.model';

const INITIAL_MSG = 'Hola, me contacto desde ilBarto, quisiera encargarte lo siguiente: ';

export function getUrlWsp(phone: any, cart: Cart): string {
  return (
    'https://api.whatsapp.com/send/?phone=' +
    phone +
    '&text=' +
    formatCart(cart) +
    '&app_absent=0'
  );
}

function formatCart(cart: Cart): string {
  return cart.products
    .map((p) => `${p.quantity} ${p.name}, `)
    .reduce((a, b) => a + b, INITIAL_MSG)
    .concat(`.  El total presupuestado es ${cart.price}`);
}
