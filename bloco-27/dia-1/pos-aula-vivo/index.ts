import Cliente from "./Cliente";
import PedidoItem from "./PedidoItem";
import Pedido from "./Pedido";

const cliente = new Cliente("João");
const refrigerante = new PedidoItem("Coca-Cola", 5.00);
const pizza = new PedidoItem("Pizza", 22.00);
const hamburger = new PedidoItem("Hamburger", 15.00);

const pedido = new Pedido(cliente, [refrigerante, pizza, hamburger], "Dinheiro", 2.00);

pedido.pedidoFeito();
