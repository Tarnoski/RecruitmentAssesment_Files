/*
		The query displays the total amount of transactions and the sum of all the days between the start and end date
	of each transaction for every CAMPANYA AND USUARIO pair.
	
		Meanwhile, the procedure executes the previous query but including 3 parameters to filter the results
	  it will display the same results as the base query.
  */

/*
SELECT CAMPANYA.IDCAMPANYA, CAMPANYA.NOMBRE, USUARIO.IDUSUARIO, USUARIO.NOMBRE,  USUARIO.Login,
       COUNT(TRANSACCION.IDTRANSACCION) AS TotalTransactions,
       SUM(DATEDIFF(DAY, TRANSACCION.tInicio, TRANSACCION.tFinal)) AS TimeDifferenceInSeconds
FROM TRANSACCION
INNER JOIN CAMPANYA ON CAMPANYA.IDCAMPANYA = TRANSACCION.idCampanya
INNER JOIN USUARIO ON USUARIO.IDUSUARIO = TRANSACCION.idAgente
GROUP BY CAMPANYA.IDCAMPANYA, CAMPANYA.NOMBRE, USUARIO.IDUSUARIO, USUARIO.NOMBRE,  USUARIO.LOGIN
*/
/*
CREATE PROCEDURE TotalTransacciones
    @CampanyaId INT = NULL,
    @UsuarioId INT = NULL,
    @Finalid INT = NULL
AS
BEGIN
	SELECT CAMPANYA.IDCAMPANYA, CAMPANYA.NOMBRE, USUARIO.IDUSUARIO, USUARIO.NOMBRE,  USUARIO.Login,
		   COUNT(TRANSACCION.IDTRANSACCION) AS TotalTransactions,
		   SUM(DATEDIFF(DAY, TRANSACCION.tInicio, TRANSACCION.tFinal)) AS TimeDifferenceInSeconds
	FROM TRANSACCION
	INNER JOIN CAMPANYA ON CAMPANYA.IDCAMPANYA = TRANSACCION.idCampanya
	INNER JOIN USUARIO ON USUARIO.IDUSUARIO = TRANSACCION.idAgente
    WHERE (@CampanyaId IS NULL OR TRANSACCION.idCampanya = @CampanyaId)
      AND (@UsuarioId IS NULL OR TRANSACCION.idAgente = @UsuarioId)
      AND (@Finalid IS NULL OR TRANSACCION.idFinal = @Finalid)
	GROUP BY CAMPANYA.IDCAMPANYA, CAMPANYA.NOMBRE, USUARIO.IDUSUARIO, USUARIO.NOMBRE, USUARIO.LOGIN
END;
*/
EXEC TotalTransacciones @CampanyaId = 1, @UsuarioId = 2, @Finalid = 2;

