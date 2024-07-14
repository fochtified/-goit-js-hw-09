//Korzystając z delegowania, śledź zdarzenie input w formularzu i za każdym razem zapisuj obiekt z polami email i message
//do pamięci lokalnej, w której przechowywane są bieżące wartości pól formularza.

//Niech kluczem dla magazynu będzie ciąg „feedback-form-state”.

//Po załadowaniu strony sprawdź stan pamięci, a jeśli są tam przechowywane dane, wypełnij nimi pola formularza.

//W przeciwnym razie pola powinny być puste.

//Podczas submitu formularza wyczyść pamięć formularza i pola,

//a następnie wyświetl w konsoli obiekt z polami e-mail, message i ich aktualnymi wartościami.

//Formularz nasłuchuje zdarzeń input i submit.

//Podczas wprowadzania danych do dowolnego elementu formularza, są one zapisywane do lokalnej pamięci pod kluczem "feedback-form-state".

//Zapisane dane nie zawierają spacji wokół krawędzi.

//Wprowadzanie danych w jednym polu formularza nie usuwa danych w pamięci dla innego pola.

//Podczas odświeżania strony dane z pamięci lokalnej są zastępowane do elementów formularza.

//W polach formularza nie ma undefined.

//Podczas submitu formularza sprawdzane jest, czy oba elementy formularza są wypełnione.

//Podczas wysyłania formularza, jeśli oba elementy formularza są wypełnione, obiekt z polami email, message i ich aktualnymi wartościami
//jest wyświetlany w konsoli, a pamięć i pola formularza są czyszczone.

//Jeśli wprowadzisz dane do dowolnego elementu formularza po submicie, dane z poprzedniego formularza nie pojawią się w pamięci lokalnej.
