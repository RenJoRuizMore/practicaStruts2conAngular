/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('module_componentes_generales').
        component('combtnnuevoprodutos',{
           template:
         '<button  href="#!" class="btn btn-primary" id="btn_agregar_p" data-toggle="modal" data-target="#nuevoProducto">' +
         '<span class="glyphicon glyphicon-plus"></span> <i class="fa fa-cube"></i> Nuevo producto ' +
         '</button>'+
         ' <div class="modal fade" id="nuevoProducto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
          '<div class="modal-dialog" role="document">'+
                '<div class="modal-content">'+
                  '<div class="modal-header">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                        '<h4 class="modal-title" id="myModalLabel"><i class="glyphicon glyphicon-edit"></i> <b><span id="span_nuevo_p">Nuevo</span><span id="span_actualizar_p">Actualizar</span> producto</b></h4>'+
                  '</div>'+
                  '<div class="modal-body">'+
                        '<form class="form-horizontal" method="post" id="editar_producto" name="editar_producto">'+
                           ' <div id="resultados_ajax2"></div>'+
                            '<div class="form-group">'+
                                '<label  class="col-sm-3 control-label">Código</label>'+
                                '<div class="col-sm-8">'+
                                  '<input type="text" ng-model="$ctrl.obj_producto.codigo" class="form-control" id="Txt_codigo_producto" name="Txt_codigo_producto" placeholder="Código del producto" maxlength="4" required >'+                                        
                                '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                '<label  class="col-sm-3 control-label">Categoria</label>'+
                                '<div class="col-sm-8">'+
                                 '<select ng-init="$ctrl.obtener_all_categ()" ng-model="$ctrl.obj_producto.Cbx_id_categoria" class="form-control" id="Cbx_id_categoria" name="Cbx_id_categoria" required>'+
                                        '<option value="-1"> ======== Seleccione Categoria ======== </option>'+
                                        '<option ng-repeat="categoria in array_categorias" value="{{categoria.id_categoria}}"> {{categoria.descripcion_categoria}}</option>'+
                                  '</select>'+
                                '</div>'+
                            '</div>'+
                          
                            '<div class="form-group">'+
                                '<label  class="col-sm-3 control-label">Nombre</label>'+
                                '<div class="col-sm-8">'+
                                  '<input type="text" ng-model="$ctrl.obj_producto.descripcion_producto" class="form-control" id="Txt_descripcion_producto" name="Txt_descripcion_producto" placeholder="Nombre del producto" maxlength="120" required>'+
                                '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                  '<label  class="col-sm-3 control-label">Unidad</label>'+
                                  '<div class="col-sm-8">'+
                                   ' <input type="text" ng-model="$ctrl.obj_producto.unidades_producto" class="form-control" id="Txt_unidades_producto" name="Txt_unidades_producto" placeholder="Unidad del producto" maxlength="45" required>'+
                                  '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                  '<label  class="col-sm-3 control-label">Precio</label>'+
                                  '<div class="col-sm-8">'+
                                   ' <input type="text" ng-model="$ctrl.obj_producto.precio_producto" class="form-control" id="Txt_precio_producto" name="Txt_precio_producto" placeholder="Precio de venta del producto" required pattern="^[0-9]{1,5}(\.[0-9]{0,2})?$" onKeyPress="return soloNumeros_con_punto(event)" title="Ingresa sólo números con 0 ó 2 decimales" maxlength="13">'+
                                  '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                  '<label  class="col-sm-3 control-label">Stock almacen</label>'+
                                  '<div class="col-sm-8">'+
                                    '<input type="text" ng-model="$ctrl.obj_producto.stock_a_producto" class="form-control" id="Txt_stock_a_producto" name="Txt_stock_a_producto" placeholder="Stock almacen del producto" maxlength="4" onKeyPress="return soloNumeros(event)" required>'+
                                  '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                 ' <label   class="col-sm-3 control-label">Stock minimo</label>'+
                                  '<div class="col-sm-8">'+
                                    '<input type="text" ng-model="$ctrl.obj_producto.stock_minimo_producto" class="form-control" id="Txt_stock_minimo_producto" name="Txt_stock_minimo_producto; " placeholder="Stock minimo del producto" maxlength="4" onKeyPress="return soloNumeros(event)" required>'+
                                  '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                  '<label for="descripcion" class="col-sm-3 control-label">En mostrador</label>'+
                                  '<div class="col-sm-8">'+
                                    '<select  ng-model="$ctrl.Cbx_en_mostrador_producto" class="form-control" id="Txt_en_mostrador_producto" name="Cbx_en_mostrador_producto" required>'+
                                            '<option value="0">NO</option>'+
                                            '<option value="1">SI</option>'+
                                   ' </select>'+
                                 ' </div>'+
                            '</div>'+
                            '<div class="form-group" id="div_stock_mostrador">'+
                                  '<label for="descripcion" class="col-sm-3 control-label">Stock mostrador </label>'+
                                  '<div class="col-sm-8">'+
                                    '<input type="text" ng-model="$ctrl.obj_producto.stock_m_producto" class="form-control" id="Txt_stock_m_producto" name="Txt_stock_m_producto" placeholder="Stock mostrador del producto" maxlength="4" onKeyPress="return soloNumeros(event)" required>'+
                                  '</div>'+
                            '</div>			  '+
                            '<div class="form-group" id="div_stock_min_mostrador">'+
                                  '<label for="descripcion" class="col-sm-3 control-label">Stock minimo mostrador</label>'+
                                  '<div class="col-sm-8">'+
                                      '<input type="text" ng-model="$ctrl.obj_producto.stock_minimo_mostrador_producto" class="form-control" id="Txt_stock_minimo_mostrador_producto" name="Txt_stock_minimo_mostrador_producto" placeholder="Stock minimo mostrador del producto" maxlength="4" autocomplete="off" onKeyPress="return soloNumeros(event)" required>'+
                                  '</div>'+
                            '</div>'+
                            '<div class="form-group" id="div_estado_p">'+
                                '<label class="col-sm-3 control-label">Estado</label>'+
                                '<div class="col-sm-8">'+
                                 '<select class="form-control" ng-model="$ctrl.obj_producto.Cbx_estado_producto" id="Txt_estado_producto" name="Cbx_estado_producto;" required>'+
                                       ' <option value="1"> Habilitado </option>'+
                                        '<option value="0"> Inactivo </option>'+
                                  '</select>'+
                               ' </div>'+
                            '</div> '+

                  '</div>'+
                  '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>'+
                        '<button type="button" class="btn btn-primary" id="crearpro" ng-click="$ctrl.registrar_productos()">Guardar Producto</button>'+
                        '<button type="button" class="btn btn-primary" id="modificarpro">Actualizar Producto</button>  '+
                  '</div>'+
                   '</form>'+
                '</div>'+
          '</div>'+
        '</div>',
          controller: function agregar_facturacion($scope,$http){
               // para llenar el combo de categorias en la base de datos 
                this.obtener_all_categ = function(){
                   $http.get('lst_todas_categorias.action').
                           then(function successCallBack(response){
                               $scope.array_categorias=response.data.lst_categoria;
                           },
                            function errorCallBack(response){
                                alert("ocurrio un error de carga"+ response);
                            }
                           );
               },
               this.registrar_productos = function(){
                 //  var valor=this.Cbx_id_categoria.singleSelect;
                   $http.post('insertar_productos.action',this.obj_producto).
                           then(function successCallBack(response){
                               console.log(response);
                               $('#nuevoProducto').hide();
                                alertify.success('se inserto exitosamente');
                           }, function errorCallBack(response){
                               $('#nuevoProducto').hide();
                               alertify.dialog('alert').set({transition:'flipy',title:'Factura Compra',message: 'hubo un error de envio.'}).show();
                           });
//                   
                //   console.log(this.obj_producto);
               }
           }
        });

// componente para nueva categoria 
angular.module('module_componentes_generales').
        component('combtnnuevacategoria',{
           // tendra el boton y el modal a cargo 
           template:'<button href="#!" class="btn btn-primary btn-raised" id="btn_agregar_c" data-toggle="modal" data-target="#nuevaCategoria" >'+
                     '<i class="fa fa-server"></i> Nueva Categoria'+
                     '</button>'+
                      '<div class="modal fade" id="nuevaCategoria" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
      '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                    '<h4 class="modal-title" id="myModalLabel"><i class="glyphicon glyphicon-edit"></i> '+
                        '<b><span id="span_nuevo_c">Nueva</span><span id="span_actualizar_c">Actualizar</span> Categoria</b></h4>'+
             ' </div>'+
              '<div class="modal-body">'+
                    '<form class="form-horizontal" method="post" id="editar_productos" name="editar_producto">'+
                    '<div id="resultados_ajax2"></div>'+
                        '<div class="form-group">'+
                            '<label for="descripcion" class="col-sm-3 control-label">Nombre</label>'+
                            '<div class="col-sm-8">'+
                              '<input type="text" ng-model="$ctrl.obj_categoria.txt_descripcion_c" class="form-control" id="txt_descripcion_c" name="txt_descripcion_c" placeholder="Nombre de Categoria" maxlength="120" required>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group" id="div_estado_c">'+
                            '<label class="col-sm-3 control-label">Estado</label>'+
                            '<div class="col-sm-8">'+
                             '<select ng-model="$ctrl.obj_categoria.cbx_estado_c" class="form-control" id="cbx_estado_c" name="cbx_estado_c" required>'+
                                    '<option value="1"> Habilitado </option>'+
                                    '<option value="0"> Inactivo </option>'+
                              '</select>'+
                            '</div>'+
                        '</div>  '+
              '</div>'+
              '<div class="modal-footer">'+
                   ' <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>'+
                   ' <button type="button" class="btn btn-primary" id="crearcategoria" ng-click="$ctrl.guardar_categoria()">Guardar Categoria</button>'+
                    '<button type="button" class="btn btn-primary" id="modificarcategoria">Actualizar Categoria</button> '+
             ' </div>'+
                    '</form>'+
            '</div>'+
      '</div>'+
    '</div> ',
           controller : function fn_controladornuevacategoria($http){
               this.guardar_categoria=function(){
                   $http.post('insertar_categoria.action',this.obj_categoria).
                           then(function successCallBack(response){
                                 $('#nuevaCategoria').hide();
                                 alertify.success('se inserto exitosamente');
                           },function errorCallBack(response){
                                $('#nuevaCategoria').hide();
                               alertify.dialog('alert').set({transition:'flipy',title:'Categoria',message: 'hubo un error de envio.'}).show();
                           }
                           );
               }
           }
        });

