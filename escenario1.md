# Modelado de Amenazas: Sistema de Autenticación y API de Usuarios

**Fecha:** 2026-08-31
**Versión:** 1.0
**Autores:** Marbella

## 1. Diagrama de Flujo de Datos (DFD) con Mermaid.js

A continuación se muestra la arquitectura lógica del sistema, los flujos de datos y las fronteras de confianza (Trust Boundaries) que separan las zonas seguras de las inseguras.

```mermaid
graph TD
    %% Definicion de Nodos
    US["Usuario (Navegador/App)"]
    API["API Gateway / Backend"]
    BD[("Base de Datos SQL")]
    AD["Administrador de Red"]
    AUTH["Servicio de Auth Externo (OAuth)"]

    %% Conexiones
    US -->|1. Envia Credenciales HTTPS| API
    API -->|2. Consulta / Guarda Usuario| BD
    API -->|3. Valida Token| AUTH
    AD -->|5. Mantenimiento SSH| BD

    %% Fronteras de Confianza
    subgraph Frontera_Internet["Frontera de Internet (Insegura)"]
        US
    end

    subgraph Red_Interna["Red Interna de la Empresa (Zona Segura)"]
        API
        BD
        AUTH
    end

    %% Estilos
    classDef internet fill:#f9f,stroke:#333,stroke-width:2px;
    classDef secureZone fill:#bbf,stroke:#333,stroke-width:2px;
    
    class US internet;
    class API,BD,AUTH secureZone;