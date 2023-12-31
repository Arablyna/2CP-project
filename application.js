///Meme chose que init ( pachages + declarations)
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const init = require('./creercompte')
const saisie = require('./saisir')
const modifierinfo = require('./modifierinfosprofil')
const verification = require('./verification')
const recours = require('./recours')
const validerRecours = require('./ValiderRec')
const reinitialiser = require("./reinitialisermdp")
const seconnecter = require('./seconnecter')
const reinitialise = reinitialiser.router
const classementinit = require('./classement_init')
const classementfin = require('./classement_final')
const modifierinfosprofil = require('./parametres')
app.use('/img/', express.static('./img'))
const logger = require('./logger')
const morgan = require('morgan');
const historique = require('./historique')
const validation = require('./validation')
const gestionDossiers = require('./gestionDossiers')
const sedeconnecter = require('./sedeconnecter')
app.use(morgan('tiny', { stream: logger.stream }));
app.disable('view cache');
/// Fonction qui recupere les entrees du formulaire et les placer dans un fichier.json ///
app.use(seconnecter)
app.use(init)
app.use(saisie)
app.use(verification)
app.use(recours)
app.use(validerRecours)
app.use(modifierinfo)
app.use(reinitialise)
app.use(classementinit)
app.use(classementfin)
app.use(modifierinfosprofil)
app.use(historique)
app.use(validation)
app.use(gestionDossiers)
app.use(sedeconnecter)
app.listen(3000)