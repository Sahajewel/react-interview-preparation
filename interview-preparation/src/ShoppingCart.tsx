import { useReducer } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
type State = { items: CartItem[] };
type Action =
  | {
      type: "ADD_TO_ITEM";
      payload: { id: number; name: string; price: number };
    }
  | { type: "INCRESE_QTY"; payload: number }
  | { type: "DECREASE_QTY"; payload: number }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" };

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingIndex > -1) {
        const updateItems = [...state.items];
        updateItems[existingIndex].quantity += 1;
        return { ...state, items: updateItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "INCRESE_QTY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
    case "DECREASE_QTY": {
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case "CLEAR_CART": {
      return {
        items: [],
      };
    }
    default:
      return state;
  }
}
export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Headphone", price: 3500 },
  ];
  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <div style={{ marginBottom: "300px" }}>
      <h1>Shopping Cart</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>tk. {product.price}</p>
          <button
            onClick={() => dispatch({ type: "ADD_TO_ITEM", payload: product })}
          >
            Add to cart
          </button>
        </div>
      ))}

      <h3>Your Cart{state.items.length}</h3>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {state.items.map((item) => (
              <li key={item.id}>
                <b>{item.name}</b> - tk.{item.price}*{item.quantity}=
                <b>tk. {item.price * item.quantity}</b>
                <button
                  onClick={() =>
                    dispatch({ type: "INCRESE_QTY", payload: item.id })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE_QTY", payload: item.id })
                  }
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item.id })
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total Price: {totalPrice}</h4>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Please do tha cart empty
          </button>
        </div>
      )}
    </div>
  );
}
