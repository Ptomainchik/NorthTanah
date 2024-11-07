import classes from '../../../Styles/Styles.module.css'


export const GuildTable = () => {
    return (
        <div className={classes.cardtableg}>
 <h3>Гильдии</h3>
  <table border={5} bgcolor={"grey"} className={classes.table}>
    <thead>
 <tr>
  <th>Гильдия</th>
  <th>Глава гильдии</th>
  <th>Деятельность гильдии</th>
  <th>Золото гильдии</th>
 </tr>
 </thead>
 <tbody>
 <tr>
  <td>Guild war</td>
  <td>Name</td>
  <td>war</td>
  <td>500 тонн</td>
 </tr>
 <tr>
  <td>Guild yoyo</td>
  <td>Name</td>
  <td>Yoyo</td>
  <td>300 тонн</td>
 </tr>
 </tbody>
</table>
</div>
    )
}