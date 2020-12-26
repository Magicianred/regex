package main

import (
	"bytes"
	"fmt"
	"regexp"
)

func main(){

	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	regex9, _ := regexp.Compile("9")
	fmt.Println(regex9.MatchString(texto))
	fmt.Println(regex9.FindString(texto))
	fmt.Println(regex9.FindStringIndex(texto))
	
	// Regex letras
	regexLetras, _ := regexp.Compile("[a-f]")
	fmt.Println(regexLetras.FindAllString(texto, 20)) // Define 20 matchs de um texto
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei")) // replace

	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)
	fmt.Println(string(resultado))
}