/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ComponentesAction;

import ConfiguracionAngular.JSONConfiguracion;
import Logica_Negocio.pojos.Categoria;
import com.opensymphony.xwork2.Action;
import static com.opensymphony.xwork2.Action.SUCCESS;
import conexion.BaseConexion;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.swing.JOptionPane;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 *
 * @author Rene Jose
 */
public class Componentes {
    // crear el objeto HttpServletResponse 
    // crear el map con entradas yy salidas
    List<Categoria> lst_categoria=new ArrayList<>();
    
    
     public String cargar_categorias(){      
        // logica de negocio (traer las listar)
         try {
            String sql_generico = "select * from categoria where estado_categoria=1 and id_categoria !=1";
            ResultSet resul = BaseConexion.getStatement().executeQuery(sql_generico);
            if (resul!=null) {
              
                while (resul.next()) {
                    Categoria obj_rol=new Categoria();
                    obj_rol.setId_categoria(resul.getInt(1));
                    obj_rol.setDescripcion_categoria(resul.getString(2));                
                    
                    lst_categoria.add(obj_rol);
                }
                            
            }           
            resul.close();
            return Action.SUCCESS;
        } catch (SQLException e) {
             JOptionPane.showMessageDialog(null,"problemas con enmtradas");
            return "error";
        }
    }
    // insertar datos 
      public String insertar_productos(){
         JSONParser parseador= new JSONParser();
          String valores_json=JSONConfiguracion.extraer_data_json();
          // try si en caso no se parsea
          try{
              // trasnformar toda la data en el objeto de parseador 
              Object obj_transformado= parseador.parse(valores_json);
              // trasnformarlo a un JSONObject 
              JSONObject json_data=(JSONObject)obj_transformado;
              // igresar elobjeto como POJO para anexarlo a la base de datos 
              
            CallableStatement sentencis=BaseConexion.getprepareCall("{call sp_registrar_producto(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)}");
            
            sentencis.setString(1,(String) json_data.get("codigo"));      
             
            sentencis.setInt(2,Integer.parseInt(json_data.get("Cbx_id_categoria").toString()));   
             
            sentencis.setString (3, (String) json_data.get("descripcion_producto"));   
            sentencis.setDouble(4,Double.parseDouble( json_data.get("precio_producto").toString())); 
            sentencis.setString(5,(String) json_data.get("unidades_producto"));
            
            sentencis.setInt(6,Integer.parseInt(json_data.get("stock_a_producto").toString())); 
            sentencis.setInt(7,Integer.parseInt(json_data.get("stock_m_producto").toString())); 
           
            sentencis.setInt(8,Integer.parseInt(json_data.get("stock_m_producto").toString())); 
            sentencis.setInt(9, Integer.parseInt(json_data.get("stock_minimo_mostrador_producto").toString())); 
            sentencis.setInt(10,Integer.parseInt(json_data.get("Cbx_estado_producto").toString()));            
            
            sentencis.executeUpdate();
              return Action.SUCCESS;
              
              
          }
          catch(Exception ex){
               
               return Action.ERROR;
          }
      }
     
    // insertar categorias
      public String insertar_categoria(){
          // parseeador 
          JSONParser parseador= new JSONParser();
          // traer los datos del JSONConfiguracion 
          String string_json = JSONConfiguracion.extraer_data_json();
          // parsearlo a objeto 
         try{
            
             Object obj_json= parseador.parse(string_json);
             // una ves parseado el objeto , parsear a JSONobject 
              
             JSONObject objeto_categoria=(JSONObject) obj_json;
             
            CallableStatement sentencis=BaseConexion.getprepareCall("{call sp_registrar_categoria(?)}");
            sentencis.setString(1, (String)objeto_categoria.get("txt_descripcion_c").toString());            
            sentencis.executeUpdate();
            return Action.SUCCESS;
             
         }
         catch(Exception ex){
             JOptionPane.showMessageDialog(null,"problemas con enmtradas"+ ex);
         }
        return Action.SUCCESS;
      }
      
    public List<Categoria> getLst_categoria() {
        return lst_categoria;
    }

    public void setLst_categoria(List<Categoria> lst_categoria) {
        this.lst_categoria = lst_categoria;
    }


     
    
}
