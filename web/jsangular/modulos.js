/* 
 * creacion de modulos para el ejemplo
 * 
 * 
 */

var m_Compras=angular.module('module_compras',[]);
var m_ventas=angular.module('module_ventas',[]);
var m_componentes= angular.module('module_componentes_generales',[]);
var m_factura_compra= angular.module('module_factura-compras',['module_componentes_generales']);


