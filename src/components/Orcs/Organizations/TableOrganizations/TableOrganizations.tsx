import classes from '../../Styles/OrcsKingdom.module.css'


export const TableOrganizations= () => {
    return (
        <div>
  <table border={5} bgcolor={"grey"} className={classes.orcsTable}>
    <thead>
 <tr>
  <th>Организация</th>
  <th>Глава</th>
  <th>Деятельность </th>
  <th>Золото гильдии</th>
 </tr>
 </thead>
 <tbody>
 <tr>
  <td>Ловцы духов</td>
  <td>Норгуз</td>
  <td>Сохраниние наследия</td>
  <td>---</td>
 </tr>
 <tr>
  <td>Охотники</td>
  <td>Малгар</td>
  <td>Добыча провианта</td>
  <td>200 тонн</td>
 </tr>
 <tr>
  <td>Рабочие</td>
  <td>Вакшиг</td>
  <td>Строительство, Ремесла</td>
  <td>200 тонн</td>
 </tr>
 <tr>
  <td>Банды</td>
  <td>Родзарик</td>
  <td>Разбой</td>
  <td>700 тонн</td>
 </tr>
 </tbody>
</table>
</div>
    )
}