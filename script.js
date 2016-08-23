var chart1 = c3.generate({
    /*size: {
        height: 250,
        width: 250
    },*/
    data: {
        url: 'data/Globale.csv',        
        type : 'pie',
        hide: ['-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    color: {
        pattern: ['#084D96', '#ED433C']
    },
    transition: {
        duration: 1000
    },
    legend: {
        hide: ['-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    }
});

var chart2 = c3.generate({
    bindto:'#chart2',
    /*size: {
        height: 300,
        width: 250
    },*/
    data: {
        url: 'data/Globale.csv',        
        type : 'pie',
        hide: ['Homme','Femme',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    legend: {
        hide: ['Homme','Femme',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
        hide:true
    },
    color: {
        pattern: ['#EDCC3C', '#BAA02F', '#F0DC85', '#F7AA32', '#EEF732', '#D6A52B']
    },
    transition: {
        duration: 1000
    },
    tooltip: {
        show: true
    }
});

var chart3 = c3.generate({
    bindto:'#chart3',
    /*size: {
        height: 250,
        width: 250
    },*/
    data: {
        url: 'data/Globale.csv',        
        type : 'pie',
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    legend: {
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    color: {
        pattern: ['#00AFEC', '#00506C', '#48C4EF', '#21596C', '#0089B9', '#0CF7B3']
    },
    transition: {
        duration: 1000
    },
    tooltip: {
        show: false
    }
});

var chart4 = c3.generate({
    bindto:'#chart4',
    /*size: {
        height: 250,
        width: 250
    },*/
    data: {
        url: 'data/Globale.csv',        
        type : 'pie',
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    legend: {
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    color: {
        pattern: ['#7CC04B', '#2A4019', '#A6CA8C', '#35402D', '#5B8D37', '#46CD64']
    },
    transition: {
        duration: 1000
    },
    tooltip: {
        show: false
    }
});

var chart5 = c3.generate({
    bindto:'#chart5',
    /*size: {
        height: 250,
        width: 250
    },*/
    data: {
        url: 'data/Globale.csv',        
        type : 'pie',
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    legend: {
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    color: {
        pattern: ['#074d97', '#fed10f', '#00afec', '#ed433c', '#7cc04b', '#f58e31']
    },
    transition: {
        duration: 1000
    },
    tooltip: {
        show: false
    }
});

var chart6 = c3.generate({
    bindto:'#chart6',
    /*size: {
        height: 250,
        width: 250
    },*/
    data: {
        url: 'data/Globale.csv',        
        type : 'pie',
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    legend: {
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Conseil et formation','Communication, graphisme, multimédia','Internet','Informatique','Services et produits culturels','Autres services aux entreprises','Mode (Haute coututre, PAP)','Artisanat d\'art, design, decoration','Bijouterie, accessoires de mode','Beauté, relookin, bien-être','Autres services aux particuliers','Autres','Non Renseignée'
               ],
    },
    color: {
        pattern: ['#074d97', '#fed10f', '#00afec', '#ed433c', '#7cc04b', '#f58e31']
    },
    transition: {
        duration: 1000
    },
    tooltip: {
        show: true
    }
});

var chart7 = c3.generate({
    bindto:'#chart7',
    /*size: {
        height: 500,
        width: 500
    },*/
    data: {
        url: 'data/Globale.csv',        
        type : 'pie',
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
              ],
    },
    legend: {
        hide: ['Homme','Femme',
               '-26 ans','de 26 à 30 ans','de 31 à 35 ans','de 36 à 40 ans','de 41 à 45 ans','de 46 à 50 ans','+50 ans',
               'Salarié','Demandeur d\'emploi','Demandeur de longue durée','Titulaire RSA','Autre',
               'IV - Niveau Bac','III - Bac +2','II - Bac +3/4','I - Bac +5','Autre',
               'Abandon du projet','Retour à l\'emploi','Poursuite du projet','Création','Formation','Autre',
               'Association','SAS','EURL/SARL','Entreprise individuelle',
              ],
    },
    color: {
        pattern: ['#074d97', '#fed10f', '#00afec', '#ed433c', '#7cc04b', '#f58e31']
    },
    transition: {
        duration: 1000
    },
    tooltip: {
        show: true
    }
});

$( document ).ready(function() {
    $('#DonneesSociales').on('click', function (){
        $('#donsociales').toggle();
    });
    $('#SortieCouveuse').on('click', function (){
        $('#SortCouveuse').toggle();
    });

    $('#antenne').on('change', function(){
        var antenneSelect = $('#antenne').val();
        switch (antenneSelect) {
            case 'paris11':       
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/Paris11.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#paris_centre').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'paris14':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/Paris14.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#paris_14').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'paris18':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/Paris18.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#paris_18').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'courtaboeuf':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/Courtaboeuf.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#courtaboeuf').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                console.log(antenneSelect);
                break;
            case 'evry-corbeil':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/EvryCorbeil.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#evry_corbeil').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'grigny':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/Grigny.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#grigny').addClass('active')
                $('.titre-antenne').text(antenneSelect);
                //console.log(antenneSelect);
                break;
            case 'boucleNord':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/92nord.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#nord92').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'boucleSud':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/92sud.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#sud92').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'saintDenis':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/SaintDenis.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#saint_denis').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'bagnoletMontreuilNoisyleSec':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/BagnoletMontreuilNoisyLeGrand.csv'
                  });
                }
                $('#carte g').removeClass();
                $('#bagnolet_montreuil_noisy').addClass('active');
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'IDEES':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/AntenneIDEES.csv'
                  });
                }
                $('#carte g').removeClass();
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'SIAE':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/AntenneSIAE.csv'
                  });
                }
                $('#carte g').removeClass();
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'SAP':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/AntenneSAP.csv'
                  });
                }
                $('#carte g').removeClass();
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'Innovation':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/AntenneInnovation.csv'
                  });
                }
                $('#carte g').removeClass();
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'MDC':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/AntenneMDC.csv'
                  });
                }
                $('#carte g').removeClass();
                $('.titre-antenne').text(antenneSelect);
                break;
            case 'Global':
                for (i=1; i<7; i++){
                  var chart='chart'+i;
                  //var Objchart=JSON.parse(chart);
                  var Objchart=eval(chart);
                  Objchart.load({
                    url: 'data/Globale.csv'
                  });
                }
                $('#carte g').removeClass();
                $('.titre-antenne').text(antenneSelect);
                break;
            default:
                console.log('choississez une antenne !');
        }
    });
});